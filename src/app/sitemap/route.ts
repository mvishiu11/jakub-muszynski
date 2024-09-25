import { NextResponse } from 'next/server';
import type { Project } from '@/lib/types';
import { projects as manualProjects } from "@/data/projects";
import { fetchGitHubProjects } from "@/lib/github";

async function getProjects(): Promise<Project[]> {
  // Fetch GitHub projects
  const githubProjects: Project[] = await fetchGitHubProjects();

  // Create a map of manual projects by title
  const manualProjectsMap = new Map<string, Project>();
  manualProjects.forEach((project) => {
    manualProjectsMap.set(project.title.toLowerCase(), project);
  });

  // Merge GitHub projects and override with manual projects if they exist
  const mergedProjects = githubProjects.map((project) => {
    const manualProject = manualProjectsMap.get(project.title.toLowerCase());
    return manualProject ? { ...project, ...manualProject } : project;
  });

  // Add any manual projects that don't exist in GitHub projects
  manualProjects.forEach((manualProject) => {
    if (!mergedProjects.some((project) => project.title.toLowerCase() === manualProject.title.toLowerCase())) {
      mergedProjects.push(manualProject);
    }
  });

  mergedProjects.sort((a) => (a.manual === "yes" ? -1 : 1));

  return mergedProjects;
}

export async function GET() {
  const baseUrl = process.env.BASE_URL || 'https://localhost:3000';
  const projects = await getProjects();

  // List of URLs to include in the sitemap
  const urls = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString(), prio: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString(), prio: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date().toISOString(), prio: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString(), prio: 0.8 },
    ...projects.map(project => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date().toISOString(),
        prio: 0.5,
      })),
  ];

  // Create XML sitemap content
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(({ url, lastModified, prio }) => {
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${lastModified}</lastmod>
            <priority>${prio}</priority>
          </url>
        `;
      }).join('')}
    </urlset>
  `.trim();

  // Return XML response
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
