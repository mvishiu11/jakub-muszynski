'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import GitHubCalendar from 'react-github-calendar';
import { useTheme } from "next-themes"

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
  return (
    <div className="activity-table">
      <h2 className="text-center mb-4">GitHub Activity</h2>
      <GitHubCalendar 
        username="mvishiu11"
        theme={customTheme}
        blockMargin={2}
        blockSize={15}
        fontSize={14}
      />
    </div>
  );
}

export function HomePage() {
  const { theme } = useTheme();
  const statsTheme = theme === 'dark' ? 'dark' : 'light'; // Change theme for GitHub stats
  
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <motion.section 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">Engineering Excellence, Business Strategy, AI Mastery</h1>
        <p className="text-xl">Blending technology, business, and research to create impactful solutions.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link href="/about" passHref>
          <Button variant="secondary" size="lg">Learn More About Me</Button>
        </Link>
        <Link href="/projects" passHref>
          <Button variant="secondary" size="lg">Explore My Projects</Button>
        </Link>
        </div>
      </motion.section>

      <motion.section 
        className="grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
      >
        {/* GitHub Stats - Shown on both mobile and desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>GitHub Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <GitHubActivity />

                <Image 
                  src={`https://github-readme-stats.vercel.app/api?username=mvishiu11&show_icons=true&theme=${statsTheme}`}
                  alt="GitHub stats" 
                  width={500} 
                  height={200}
                  className="w-full h-auto"
                />

                <Image 
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=mvishiu11&layout=compact&theme=${statsTheme}`}
                  alt="GitHub languages" 
                  width={500} 
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* WakaTime Stats - Hidden on mobile, shown on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block" // This will show only on desktop and hide on mobile
        >
          <WakaTimeStats />
        </motion.div>
      </motion.section>
    </div>
  );
}