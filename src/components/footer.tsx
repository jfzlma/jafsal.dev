'use client';

import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { profile } = portfolioData;

  return (
    <footer className="w-full border-t border-border bg-card/40 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>
          &copy; {currentYear} {profile.name}. Senior Python Developer &amp; Technical Lead.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="/jafsal_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="text-accent hover:underline font-medium"
          >
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
