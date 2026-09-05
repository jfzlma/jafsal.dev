'use client';

import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const { profile } = portfolioData;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-12 sm:h-14 flex items-center justify-end">
        {/* Social Links & Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-accent hover:bg-card rounded-md transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-accent hover:bg-card rounded-md transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            className="p-2 text-muted-foreground hover:text-accent hover:bg-card rounded-md transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>

          <div className="h-4 w-[1px] bg-border mx-1" />

          <ThemeToggle />

          <a
            href="/jafsal_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-md bg-card hover:bg-secondary border border-border text-foreground hover:text-accent transition-colors shadow-sm"
          >
            <Download className="h-3.5 w-3.5 text-accent" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </div>
    </header>
  );
}
