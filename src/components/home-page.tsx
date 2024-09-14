'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function Page() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Engineering Excellence, Business Strategy, AI Mastery</h1>
        <p className="text-xl">Blending technology, business, and research to create impactful solutions.</p>
        <Link href="/projects" passHref>
          <Button size="lg">Explore My Projects</Button>
        </Link>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>GitHub Stats</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Placeholder for GitHub stats */}
            <p>Contributions in the last year: 500</p>
            <p>Projects worked on: 10</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>WakaTime Stats</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Placeholder for WakaTime stats */}
            <p>Time spent coding: 1000 hours</p>
            <p>Most used language: Python</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}