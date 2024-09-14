'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const skills = [
  { name: "Python", level: "Expert" },
  { name: "Rust", level: "Intermediate" },
  { name: "AI/ML", level: "Expert" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Advanced" }
]

const careerJourney = [
  {
    year: "2023",
    title: "Senior AI Engineer",
    company: "TechCorp Inc.",
    description: "Leading AI initiatives and developing cutting-edge machine learning models."
  },
  {
    year: "2021",
    title: "Co-founder",
    company: "AI Startup",
    description: "Co-founded an AI startup focusing on natural language processing solutions."
  },
  {
    year: "2019",
    title: "Software Engineer",
    company: "Web Solutions Ltd.",
    description: "Developed scalable web applications using React and Node.js."
  },
  {
    year: "2017",
    title: "Computer Science Degree",
    company: "Tech University",
    description: "Graduated with honors, specializing in artificial intelligence and machine learning."
  }
]

export function Page() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section className="text-center space-y-4">
        <Image
          src="/placeholder.svg"
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-xl max-w-2xl mx-auto">
          I'm a passionate engineer and entrepreneur with a focus on AI, machine learning, and systems programming. 
          My journey in tech has led me from writing low-level systems code to developing state-of-the-art AI models.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill.name} variant="secondary">
              {skill.name} - {skill.level}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <section>
        <h2 className="text-2xl font-bold mb-4">Career Journey</h2>
        <div className="space-y-4">
          {careerJourney.map((event, index) => (
            <div key={index} className="flex">
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
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}