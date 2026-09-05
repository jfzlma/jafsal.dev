'use client';

import React from 'react';
import { Bot, Database, Flame, Code, Server, Cpu, Cloud, ShieldCheck, Terminal, Users } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Data Ingestion & ETL': <Database className="h-4 w-4 text-accent" />,
  'Agentic AI': <Bot className="h-4 w-4 text-accent" />,
  'Actively Building': <Flame className="h-4 w-4 text-accent" />,
  'Languages': <Code className="h-4 w-4 text-accent" />,
  'Infrastructure & DataOps': <Cpu className="h-4 w-4 text-accent" />,
  'Big Data & Processing': <Server className="h-4 w-4 text-accent" />,
  'Cloud & Platforms': <Cloud className="h-4 w-4 text-accent" />,
  'Data Governance': <ShieldCheck className="h-4 w-4 text-accent" />,
  'Methodologies': <Users className="h-4 w-4 text-accent" />,
  'Web & Parsing': <Terminal className="h-4 w-4 text-accent" />,
};

export function SkillsShowcase() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="pt-10 sm:pt-12 border-t border-border/50 space-y-6 text-left">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Technical Skills
        </h2>
        <p className="mt-1 text-sm sm:text-base text-muted-foreground">
          Comprehensive technical capabilities, production data engineering toolsets, and active frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((cat) => {
          const isAgenticAI = cat.category === 'Agentic AI';
          const isActivelyBuilding = cat.category === 'Actively Building';

          return (
            <div
              key={cat.category}
              className={`p-5 rounded-xl bg-card border transition-colors flex flex-col justify-between ${
                isAgenticAI || isActivelyBuilding
                  ? 'border-accent/40 bg-card shadow-sm'
                  : 'border-border hover:border-accent/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    {CATEGORY_ICONS[cat.category] || <Code className="h-4 w-4 text-accent" />}
                    <h3 className="font-semibold text-sm sm:text-base text-foreground">
                      {cat.category}
                    </h3>
                  </div>
                  {isAgenticAI && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                      Focus
                    </span>
                  )}
                  {isActivelyBuilding && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                      Scaling
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-foreground/90 border border-border/80 font-sans"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
