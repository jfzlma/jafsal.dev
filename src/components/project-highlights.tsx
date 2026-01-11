
"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ExternalLink } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';

const projectCategories = portfolioData.projects;

export function ProjectHighlights() {
  return (
    <section id="projects">
      <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Project Highlights</h2>
      <p className="mt-2 text-lg text-muted-foreground">A selection of my key projects.</p>
      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full" defaultValue="Web Scraping">
            {Object.entries(projectCategories).map(([category, projects]) => (
                <AccordionItem value={category} key={category}>
                    <AccordionTrigger className="text-lg font-medium hover:no-underline">{category} ({projects.length})</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid gap-4 pt-2 sm:grid-cols-2">
                        {projects.map((project, index) => (
                            <Card key={index} className="transition-shadow hover:shadow-md">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <CardTitle className="text-base">{project.projectName}</CardTitle>
                                        {project.url && (
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-accent transition-colors hover:text-accent/80" aria-label={`View ${project.projectName}`}>
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </CardHeader>
                                {project.description && (
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{project.description}</p>
                                    </CardContent>
                                )}
                            </Card>
                        ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </section>
  );
}
