import ProjectPage from '@/components/project-page';
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

export default async function Project() {
  const projects = await getProjects();

  return (
    <ProjectPage projects={projects}/>
  );
}
