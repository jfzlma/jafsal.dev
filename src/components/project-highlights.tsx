'use client';

import React from 'react';
import { Activity, ShoppingBag, Globe, BookOpen, ExternalLink, Bug, Database, Wrench } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';

type Project = (typeof portfolioData.projects)[number] & {
  stats?: { value: string; label: string }[];
  sources?: string[];
  techniques?: string[];
  publication?: { title: string; journal: string; date: string; url?: string };
};

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  'structural-health-monitoring': <Activity className="h-5 w-5 text-accent" />,
  'rapid-prototyping-food-app': <ShoppingBag className="h-5 w-5 text-accent" />,
  'web-applications-portfolio': <Globe className="h-5 w-5 text-accent" />,
  'web-crawling-fleet': <Bug className="h-5 w-5 text-accent" />,
};

function TechTags({ tech }: { tech: string[] }) {
  return (
    <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <span
          key={t}
          className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ListColumn({ icon, label, items }: { icon: React.ReactNode; label: string; items: string[] }) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-2 pb-2 border-b border-border/60 mb-3">
        {icon}
        <span className="text-xs font-semibold text-foreground/90 uppercase tracking-wider">{label}</span>
      </div>
      <ul className="space-y-1.5 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-accent select-none">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlagshipProject({ project }: { project: Project }) {
  return (
    <article
      id="crawling-fleet"
      className="md:col-span-3 p-6 sm:p-7 rounded-xl bg-card border border-accent/40 space-y-5"
    >
      <div className="flex items-center gap-3 flex-wrap">
        <div className="p-2.5 rounded-lg bg-secondary border border-border">
          {PROJECT_ICONS[project.id]}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">{project.title}</h3>
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
          Flagship
        </span>
      </div>

      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.description}</p>

      {project.stats && (
        <div className="grid grid-cols-3 gap-3">
          {project.stats.map((s) => (
            <div key={s.label} className="p-3 sm:p-4 rounded-lg bg-secondary/60 border border-border text-center">
              <div className="text-xl sm:text-2xl font-bold font-mono text-accent">{s.value}</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {project.sources && (
          <ListColumn
            icon={<Database className="h-3.5 w-3.5 text-accent" />}
            label="Source categories"
            items={project.sources}
          />
        )}
        {project.techniques && (
          <ListColumn
            icon={<Wrench className="h-3.5 w-3.5 text-accent" />}
            label="Techniques"
            items={project.techniques}
          />
        )}
      </div>

      <TechTags tech={project.tech} />
    </article>
  );
}

export function ProjectHighlights() {
  const projects = portfolioData.projects as Project[];
  const flagship = projects.find((p) => p.id === 'web-crawling-fleet');
  const others = projects.filter((p) => p.id !== 'web-crawling-fleet');

  return (
    <section id="projects" className="pt-10 sm:pt-12 border-t border-border/50 space-y-6 text-left">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Projects
        </h2>
        <p className="mt-1 text-sm sm:text-base text-muted-foreground">
          A production crawling fleet, plus earlier IoT research and web prototyping work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {flagship && <FlagshipProject project={flagship} />}

        {others.map((project) => (
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

            <TechTags tech={project.tech} />
          </article>
        ))}
      </div>
    </section>
  );
}
