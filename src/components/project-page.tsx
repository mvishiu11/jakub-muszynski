'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Filter } from "lucide-react"

// This would typically come from a database or API
const projects = [
  {
    id: 1,
    title: "RustyLox",
    description: "An interpreter for the Lox language, built in Rust, based on Crafting Interpreters.",
    technologies: ["Rust", "GitHub"],
    category: "Systems",
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "A deep learning model that generates images from text descriptions.",
    technologies: ["Python", "PyTorch", "React"],
    category: "AI/ML",
  },
  // Add more projects as needed
]

export function Page() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-xl">From crafting interpreters to AI-driven neural networks, here's a collection of my work.</p>
      </section>

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Project List</h2>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" /> Filter Projects
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/projects/${project.id}`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}