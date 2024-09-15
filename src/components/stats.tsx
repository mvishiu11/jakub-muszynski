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
      <Card>
        <CardHeader>
          <CardTitle>GitHub Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* GitHub Stars */}
            <img
              src="https://img.shields.io/github/stars/mvishiu11?style=social"
              alt="GitHub Stars"
              className="w-full"
            />
            {/* GitHub Followers */}
            <img
              src="https://img.shields.io/github/followers/mvishiu11?style=social"
              alt="GitHub Followers"
              className="w-full"
            />
            {/* GitHub Forks */}
            <img
              src="https://img.shields.io/github/forks/mvishiu11/rustylox?style=social"
              alt="GitHub Forks"
              className="w-full"
            />
            {/* GitHub Last Commit */}
            <img
              src="https://img.shields.io/github/last-commit/mvishiu11/rustylox?style=flat"
              alt="GitHub Last Commit"
              className="w-full"
            />
            {/* GitHub Issues */}
            <img
              src="https://img.shields.io/github/issues/mvishiu11/rustylox"
              alt="GitHub Issues"
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>
    );
  }