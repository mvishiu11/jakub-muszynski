'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

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
              <p>Contributions in the last year: 500</p>
              <p>Projects worked on: 10</p>
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
              <p>Time spent coding: 1000 hours</p>
              <p>Most used language: Python</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  )
}