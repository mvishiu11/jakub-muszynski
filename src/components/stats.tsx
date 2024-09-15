import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import GitHubCalendar from 'react-github-calendar';


const customTheme = {
    light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'], // light theme color
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],  // dark theme color
  };

export function WakaTimeStats() {
    const { theme } = useTheme();
  
    // Define URLs for both light and dark modes
    const wakaLightMode1 = "https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/027976c3-01fe-4865-96cc-66f498e4ab97.svg";
    const wakaLightMode2 = "https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/ba9b2cb1-4051-4500-9ea8-0bcf10267b45.svg";
    
    const wakaDarkMode1 = "https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/8c75cc60-bb8c-4c90-a292-eb084d97e14c.svg";
    const wakaDarkMode2 = "https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/80ce0d0e-b5a4-4f0f-9f9f-e035fd0e350b.svg";
  
    // Use theme to conditionally select the appropriate URLs
    const embed1 = theme === "dark" ? wakaDarkMode1 : wakaLightMode1;
    const embed2 = theme === "dark" ? wakaDarkMode2 : wakaLightMode2;
  
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
  
  export function GitHubActivity() {
    const blockSize = "block md:block lg:block" ? 12 : 6;
    const blockMargin = "block md:block lg:block" ? 3 : 2;
    const fontSize = "block md:block lg:block" ? 14 : 10;
  
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
    return (
      <Card className="shadow-lg rounded-md">
        <CardHeader>
          <CardTitle>GitHub Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* GitHub Stars */}
            <a
              href="https://github.com/mvishiu11?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://img.shields.io/github/stars/mvishiu11?style=flat-square&logo=github&label=Stars&color=blue"
                alt="GitHub Stars"
                className="hover:opacity-80 transition-opacity duration-300 w-full"
              />
            </a>
  
            {/* GitHub Followers */}
            <a
              href="https://github.com/mvishiu11?tab=followers"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://img.shields.io/github/followers/mvishiu11?style=flat-square&logo=github&label=Followers&color=green"
                alt="GitHub Followers"
                className="hover:opacity-80 transition-opacity duration-300 w-full"
              />
            </a>
  
            {/* GitHub Forks */}
            <a
              href="https://github.com/mvishiu11/rustylox"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://img.shields.io/github/forks/mvishiu11/rustylox?style=flat-square&logo=github&label=Forks&color=orange"
                alt="GitHub Forks"
                className="hover:opacity-80 transition-opacity duration-300 w-full"
              />
            </a>
  
            {/* GitHub Last Commit */}
            <a
              href="https://github.com/mvishiu11/rustylox"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://img.shields.io/github/last-commit/mvishiu11/rustylox?style=flat-square&logo=github&label=Last%20Commit&color=purple"
                alt="GitHub Last Commit"
                className="hover:opacity-80 transition-opacity duration-300 w-full"
              />
            </a>
  
            {/* GitHub Open Issues */}
            <a
              href="https://github.com/mvishiu11/rustylox/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://img.shields.io/github/issues/mvishiu11/rustylox?style=flat-square&logo=github&label=Open%20Issues&color=red"
                alt="GitHub Open Issues"
                className="hover:opacity-80 transition-opacity duration-300 w-full"
              />
            </a>
  
            {/* GitHub Pull Requests */}
            <a
              href="https://github.com/mvishiu11/rustylox/pulls"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://img.shields.io/github/issues-pr/mvishiu11/rustylox?style=flat-square&logo=github&label=Pull%20Requests&color=yellow"
                alt="GitHub Pull Requests"
                className="hover:opacity-80 transition-opacity duration-300 w-full"
              />
            </a>
          </div>
        </CardContent>
      </Card>
    );
  }