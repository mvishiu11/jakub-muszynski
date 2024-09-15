'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import GitHubCalendar from 'react-github-calendar';

const customTheme = {
  light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'], // light theme color
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],  // dark theme color
};

export default function GitHubActivity() {
  return (
    <div className="activity-table">
      <h2>GitHub Activity</h2>
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
                src="https://github-readme-stats.vercel.app/api?username=mvishiu11&show_icons=true&theme=radical"
                alt="GitHub stats" 
                width={500} 
                height={200} 
              />

              <Image 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ergo&layout=compact&theme=radical"
                alt="GitHub langugages" 
                width={500} 
                height={200} 
              />
            </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>WakaTime Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <figure><embed src="https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/027976c3-01fe-4865-96cc-66f498e4ab97.svg"></embed></figure>
              <figure><embed src="https://wakatime.com/share/@cadf71c9-8aae-41b2-984d-0ff534882753/ba9b2cb1-4051-4500-9ea8-0bcf10267b45.svg"></embed></figure>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  )
}