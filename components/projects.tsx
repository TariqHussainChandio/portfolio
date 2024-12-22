"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import Link from 'next/link'
const projects = [
  {
    title: 'Library Management System',
    description: 'Involves managing books, users, transactions and possibly administrative tasks like adding or removing books using Python with an Object-Oriented approach. ',
    link: '#',
  },
  {
    title: 'VYBE App',
    description: 'A responsive android app for text and voice messaging using React and MongoDB.',
    link: '#',
  },
  {
    title: 'Railway and Ticket Management System',
    description: 'involves managing train schedules, tickets, passengers, and transactions such as booking and cancellation.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
                <Button asChild className="w-full">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    Comming Soon
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

