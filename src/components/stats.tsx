import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import GitHubCalendar from 'react-github-calendar';
import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { FaCodeBranch, FaClock, FaCheckCircle } from 'react-icons/fa';

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

type LanguageEdge = {
    size: number;
    node: {
      name: string;
      color: string;
    };
  };
  
  type RepositoryNode = {
    name: string;
    languages: {
      edges: LanguageEdge[];
    };
    defaultBranchRef: {
      target: {
        history: {
          totalCount: number;
        };
        committedDate: string;
      };
    };
  };
  
  type GitHubStatsResponse = {
    viewer: {
      repositories: {
        nodes: RepositoryNode[];
      };
      contributionsCollection: {
        totalRepositoryContributions: number;
      };
    };
  };
  

const customTheme = {
    light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

export function WakaTimeStats() {
    const { theme } = useTheme();
  
    const wakaLightTime = "https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/027976c3-01fe-4865-96cc-66f498e4ab97.svg";
    const wakaLightLang = "https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/ba9b2cb1-4051-4500-9ea8-0bcf10267b45.svg";
    
    const wakaDarkTime = "https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/8c75cc60-bb8c-4c90-a292-eb084d97e14c.svg";
    const wakaDarkLang = "https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/80ce0d0e-b5a4-4f0f-9f9f-e035fd0e350b.svg";
  
    const embed1 = theme === "dark" ? wakaDarkTime : wakaLightTime;
    const embed2 = theme === "dark" ? wakaDarkLang : wakaLightLang;
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>WakaTime Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <figure><embed src={embed1}/></figure>
          </div>
          <div>
            <figure><embed src={embed2}/></figure>
          </div>
        </CardContent>
      </Card>
    );
  }

  export function WakaTimeTime() {
    const { theme } = useTheme();
  
    // Define URLs for both light and dark modes
    const wakaLightTime = "https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/027976c3-01fe-4865-96cc-66f498e4ab97.svg";
    
    const wakaDarkTime = "https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/8c75cc60-bb8c-4c90-a292-eb084d97e14c.svg";
  
    // Use theme to conditionally select the appropriate URLs
    const embed = theme === "dark" ? wakaDarkTime : wakaLightTime;
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>WakaTime Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <figure><embed src={embed}/></figure>
          </div>
        </CardContent>
      </Card>
    );
  }

  export function WakaTimeLang() {
    const { theme } = useTheme();
  
    const wakaLightLang = "https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/ba9b2cb1-4051-4500-9ea8-0bcf10267b45.svg";
    const wakaDarkLang = "https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/80ce0d0e-b5a4-4f0f-9f9f-e035fd0e350b.svg";
  
    const embed = theme === "dark" ? wakaDarkLang : wakaLightLang;
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>WakaTime Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <figure><embed src={embed}/></figure>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  export function GitHubActivity() {
    const blockSize = 12;
    const blockMargin = 3;
    const fontSize = 14;
  
    return (
      <div className="activity-table">
        <h2 className="text-center mb-4">GitHub Activity</h2>
        <GitHubCalendar 
          username="mvishiu11"
          theme={customTheme}
          blockMargin={blockMargin}
          blockSize={blockSize}
          fontSize={fontSize}
        />
      </div>
    );
  }

  export function CustomGitHubStats() {
    const [stats, setStats] = useState({
      totalCommits: 0,
      totalRepositories: 0,
      lastCommitDate: '',
    });
  
    useEffect(() => {
      async function fetchGitHubStats() {
        const { data } = await client.query<GitHubStatsResponse>({
          query: gql`
            query {
              viewer {
                repositories(first: 100) {
                  nodes {
                    name
                    languages(first: 10) {
                      edges {
                        size
                        node {
                          name
                          color
                        }
                      }
                    }
                    defaultBranchRef {
                      target {
                        ... on Commit {
                          history(first: 0) {
                            totalCount
                          }
                          committedDate
                        }
                      }
                    }
                  }
                }
                contributionsCollection {
                  totalRepositoryContributions
                }
              }
            }
          `,
        });
  
        const repos = data.viewer.repositories.nodes;
        let totalCommits = 0;
        let lastCommitDate = new Date(0);
  
        // Calculate total commits and find the most recent commit date
        repos.forEach((repo: RepositoryNode) => {
          const repoCommits = repo.defaultBranchRef?.target?.history?.totalCount || 0;
          totalCommits += repoCommits;
  
          const repoLastCommitDate = new Date(repo.defaultBranchRef?.target?.committedDate);
          if (repoLastCommitDate > lastCommitDate) {
            lastCommitDate = repoLastCommitDate;
          }
        });
  
        setStats({
          totalCommits,
          totalRepositories: data.viewer.contributionsCollection.totalRepositoryContributions,
          lastCommitDate: lastCommitDate.toLocaleDateString(),
        });
      }
  
      fetchGitHubStats();
    }, []);
  
    return (
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">GitHub Contribution Stats</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Total Commits */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center">
            <FaCodeBranch className="text-blue-500 dark:text-blue-300 w-8 h-8 mr-4" />
            <div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Total Commits</p>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-bold">{stats.totalCommits.toLocaleString()}</p>
            </div>
          </div>
          
          {/* Repositories Contributed To */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center">
            <FaCheckCircle className="text-green-500 dark:text-green-300 w-8 h-8 mr-4" />
            <div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Repos Contributed To</p>
              <p className="text-xl text-green-600 dark:text-green-400 font-bold">{stats.totalRepositories}</p>
            </div>
          </div>
          
          {/* Last Commit Date */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center">
            <FaClock className="text-purple-500 dark:text-purple-300 w-8 h-8 mr-4" />
            <div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Last Commit Date</p>
              <p className="text-xl text-purple-600 dark:text-purple-400 font-bold">{stats.lastCommitDate}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }