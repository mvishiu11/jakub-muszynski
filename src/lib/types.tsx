// Define the type for a single language entry in the GitHub repository
type LanguageEdge = {
    size: number;
    node: {
      name: string;
      color: string;
    };
  };
  
// Define the type for a single GitHub repository
export type GitHubRepo = {
    id: number;
    name: string;
    description: string;
    topics: string[] | null;
    html_url: string;
    archived: boolean;
    fork: boolean;
    languages: {
      edges: LanguageEdge[];
    };
    created_at: string;
    message?: string | null;
  };

export type Project = {
    id: number;
    title: string;
    description: string;
    overview: string;
    technologies: string[];
    features: string[];
    category: string;
    githubLink: string;
    demoLink?: string | null;
    manual?: "yes" | "no";
  };  

export type ProjectsPageProps = {
    projects: Project[];
  };

export type ContactEmailProps = {
    message: string;
    email: string;
    name: string;
  };