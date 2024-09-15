"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"
import { careerJourney, skills } from "@/data/about"

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <motion.section 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/photo_about.jpg"
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-xl max-w-2xl mx-auto">
          I&apos;m a passionate engineer and entrepreneur with a focus on AI, machine learning, and systems programming. 
          My journey in tech has led me from writing low-level systems code to developing state-of-the-art AI models.
        </p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Badge variant="secondary">
                  {skill.name} - {skill.level}
                </Badge>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Career Journey</h2>
        <div className="space-y-4">
          {careerJourney.map((event, index) => (
            <motion.div 
              key={index} 
              className="flex"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center mr-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full">
                  {event.year}
                </div>
                {index < careerJourney.length - 1 && <div className="w-px h-full bg-border" />}
              </div>
              <Card className="flex-grow">
                <CardHeader>
                  <CardTitle>{event.title} at {event.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}