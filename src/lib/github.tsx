import { GitHubRepo, Project } from '@/lib/types';

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

// Helper function to determine the category of a project
function determineCategory(repo: GitHubRepo): string {
  // Use repository topics if available
  if (repo.topics?.includes("machine-learning") || repo.topics?.includes("ai")) {
    return "AI/ML";
  }
  if (repo.topics?.includes("web") || repo.topics?.includes("frontend") || repo.topics?.includes("react")) {
    return "Web Development";
  }
  if (repo.topics?.includes("system") || repo.topics?.includes("backend") || repo.topics?.includes("api")) {
    return "Systems";
  }
  
  // Fallback based on repo name or description
  const nameOrDescription = `${repo.name} ${repo.description || ""}`.toLowerCase();
  if (nameOrDescription.includes("micrograd") || nameOrDescription.includes("neural") || nameOrDescription.includes("pytorch")) {
    return "AI/ML";
  }
  if (nameOrDescription.includes("system") || nameOrDescription.includes("speech2text") || nameOrDescription.includes("api")) {
    return "Systems";
  }
  if (nameOrDescription.includes("web") || nameOrDescription.includes("frontend") || nameOrDescription.includes("playground")) {
    return "Web Development";
  }
  if (nameOrDescription.includes("language") || nameOrDescription.includes("rustylox") || nameOrDescription.includes("interpreter")) {
    return "Languages";
  }

  // Default category
  return "Miscellaneous";
}

// Helper function to map languages to technologies
function mapLanguagesToTechnologies(languages: string[]): string[] {
  return languages.map((language) => {
    switch (language.toLowerCase()) {
      case "javascript":
      case "typescript":
        return "JavaScript/TypeScript";
      case "python":
        return "Python";
      case "rust":
        return "Rust";
      case "go":
        return "Go";
      case "java":
        return "Java";
      case "c++":
        return "C++";
      case "c":
        return "C";
      default:
        return language; // Fallback: use the language as is
    }
  });
}

// List of repositories to exclude from the project list
const projectBlacklist: string[] = [
    "mvishiu11",
    "brian-main",
    "vaide-mock",
    "UILab",
    "SOP2-Saver",
    "Projects",
    "Notebooks",
    "ROS-Tutorial",
    "HackathonGS2024"
  ];  

export async function fetchGitHubProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`https://api.github.com/users/mvishiu11/repos?per_page=100`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`, // Optional: Include if you need higher rate limits or private repos
      },
    });

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} - ${response.statusText}`);
      return [];
    }

    const repositories: GitHubRepo[] = await response.json();

    // Filter repositories as needed (e.g., exclude forks, archived repos, etc.)
    const filteredRepositories = repositories.filter(
      (repo) => !repo.fork && !repo.archived && !projectBlacklist.includes(repo.name)
    );

    // Sort repositories by creation date (newest first)
    filteredRepositories.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    // Map repositories to projects with enhanced properties
    const formattedProjects: Project[] = filteredRepositories.map((repo) => {
      // Fetch repository languages
      const languages = repo.languages ? Object.keys(repo.languages) : ['GitHub'];

      return {
        id: repo.id,
        title: repo.name,
        description: repo.description || 'No description provided',
        overview: repo.description || 'No overview provided',
        technologies: mapLanguagesToTechnologies(languages), // Use mapped languages as technologies
        features: ['Auto-imported from GitHub - for more details, visit the repository'],
        category: determineCategory(repo), // Determine category based on topics and other attributes
        githubLink: repo.html_url,
        demoLink: null,
        manual: 'no', // Mark as auto-imported
      };
    });

    return formattedProjects;
  } catch (error) {
    console.error(`Failed to fetch GitHub projects: ${error}`);
    return [];
  }
}