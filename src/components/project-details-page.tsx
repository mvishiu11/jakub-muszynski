'use client'

import { useParams } from "next/navigation"
import { projects } from "@/data/projects" // Assuming your project data is here
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

// Your project data could be in a separate file or fetched from an API
export function Page() {
  const { id } = useParams();  // Get the dynamic id from the URL

  // Find the project by id
  const project = projects.find((project) => project.id === Number(id));

  // If the project doesn't exist, show a 404 message
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-xl">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{project.overview}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button asChild>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> View on GitHub
          </a>
        </Button>
        {project.demoLink && (
          <Button asChild variant="outline">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}