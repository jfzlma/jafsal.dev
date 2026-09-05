'use client';

import React from 'react';
import { Activity, ShoppingBag, Globe, BookOpen, ExternalLink } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  'structural-health-monitoring': <Activity className="h-5 w-5 text-accent" />,
  'rapid-prototyping-food-app': <ShoppingBag className="h-5 w-5 text-accent" />,
  'web-applications-portfolio': <Globe className="h-5 w-5 text-accent" />,
};

export function ProjectHighlights() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="pt-10 sm:pt-12 border-t border-border/50 space-y-6 text-left">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Projects
        </h2>
        <p className="mt-1 text-sm sm:text-base text-muted-foreground">
          Systems and applications highlighting IoT data ingestion, rapid prototyping workflows, and full-stack solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="p-6 rounded-xl bg-card border border-border flex flex-col justify-between space-y-4 hover:border-accent/40 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-secondary border border-border">
                  {PROJECT_ICONS[project.id] || <Activity className="h-5 w-5 text-accent" />}
                </div>
                <h3 className="text-lg font-bold text-foreground leading-snug">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {project.publication && (
                <div className="p-3 rounded-lg bg-secondary/60 border border-border text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-semibold text-accent">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Research Paper</span>
                    </div>
                    {project.publication.url && (
                      <a
                        href={project.publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline inline-flex items-center gap-1 font-medium"
                      >
                        <span>PDF</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground">
                    &quot;{project.publication.title}&quot; — {project.publication.journal} ({project.publication.date})
                  </p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
