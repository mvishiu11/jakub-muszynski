'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { GitHubActivity, WakaTimeStats, CustomGitHubStats, WakaTimeLang, WakaTimeTime} from "@/components/stats"

const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export function HomePage() {
  const { theme } = useTheme();
  const statsTheme = theme === 'dark' ? 'dark' : 'light';
  
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
        {/* GitHub Stats - Shown on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <Card>
            <CardHeader>
              <CardTitle>GitHub Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <GitHubActivity />
                <CustomGitHubStats />

                <Image
                  src={`https://github-readme-stats.vercel.app/api?username=mvishiu11&show_icons=true&theme=${statsTheme}&cache_seconds=1800&token=${githubToken}`}
                  alt="GitHub stats" 
                  width={500} 
                  height={200}
                  className="w-full h-auto"
                  unoptimized
                />

                <Image
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=mvishiu11&layout=compact&theme=${statsTheme}&cache_seconds=1800&token=${githubToken}`}
                  alt="GitHub languages" 
                  width={500} 
                  height={200}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* WakaTime Lang - Hidden on mobile, shown on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <WakaTimeLang />
          <WakaTimeTime />
        </motion.div>

        {/* WakaTime Stats - Hidden on desktop, shown on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="block md:hidden"
        >
          <WakaTimeStats />
        </motion.div>
      </motion.section>
    </div>
  );
}