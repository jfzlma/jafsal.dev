'use client';

import React from 'react';
import { Bot, Bug, Database, Flame, Code, Server, Cloud, ShieldOff, Terminal, Smartphone } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Web Scraping & Crawling': <Bug className="h-4 w-4 text-accent" />,
  'Anti-bot & Proxy Infrastructure': <ShieldOff className="h-4 w-4 text-accent" />,
  'Reverse Engineering': <Smartphone className="h-4 w-4 text-accent" />,
  'Data Ingestion & ETL': <Database className="h-4 w-4 text-accent" />,
  'Storage & Messaging': <Server className="h-4 w-4 text-accent" />,
  'Languages': <Code className="h-4 w-4 text-accent" />,
  'Infrastructure & DevOps': <Terminal className="h-4 w-4 text-accent" />,
  'Agentic AI': <Bot className="h-4 w-4 text-accent" />,
  'Actively Building': <Flame className="h-4 w-4 text-accent" />,
  'Cloud & IoT': <Cloud className="h-4 w-4 text-accent" />,
};

const CATEGORY_BADGES: Record<string, string> = {
  'Web Scraping & Crawling': 'Core',
  'Anti-bot & Proxy Infrastructure': 'Core',
  'Reverse Engineering': 'Core',
  'Agentic AI': 'New',
  'Actively Building': 'Learning',
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
          Scraping and anti-bot engineering first, then the data engineering stack that carries the output downstream.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((cat) => {
          const badge = CATEGORY_BADGES[cat.category];
          const isCore = badge === 'Core';

          return (
            <div
              key={cat.category}
              className={`p-5 rounded-xl bg-card border transition-colors flex flex-col justify-between ${
                isCore ? 'border-accent/40 shadow-sm' : 'border-border hover:border-accent/30'
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
                  {badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {badge}
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
