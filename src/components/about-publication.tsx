'use client';

import React from 'react';
import { BookOpen, GraduationCap, Languages, ExternalLink } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';

export function AboutPublication() {
  const { publication, education, languages } = portfolioData;

  return (
    <section id="education" className="pt-10 sm:pt-12 border-t border-border/50 space-y-6 text-left">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Education &amp; Publications
        </h2>
        <p className="mt-1 text-sm sm:text-base text-muted-foreground">
          Academic foundation, peer-reviewed engineering publications, and communication languages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Publication Card */}
        <div className="p-6 rounded-xl bg-card border border-border space-y-4 md:col-span-2 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <BookOpen className="h-4 w-4" />
                <span>Peer-Reviewed Publication</span>
              </div>
              {publication.url && (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  <span>Read Paper</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            <h3 className="text-lg font-bold text-foreground leading-snug">
              {publication.url ? (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  &quot;{publication.title}&quot;
                </a>
              ) : (
                <>&quot;{publication.title}&quot;</>
              )}
            </h3>

            <p className="text-sm font-medium text-accent">
              {publication.journal} · {publication.date}
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Published research examining IoT-based continuous structural crack displacement monitoring and automated telemetry for building safety.
            </p>
          </div>

          {publication.url && (
            <div className="pt-3 border-t border-border/50">
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-foreground bg-secondary/80 hover:bg-secondary border border-border px-3.5 py-2 rounded-lg transition-colors group"
              >
                <ExternalLink className="h-3.5 w-3.5 text-accent group-hover:translate-x-0.5 transition-transform" />
                <span>View Full Paper on IJRASET (PDF)</span>
              </a>
            </div>
          )}
        </div>

        {/* Education & Languages */}
        <div className="space-y-6 md:col-span-1">
          {/* Education Card */}
          <div className="p-6 rounded-xl bg-card border border-border space-y-2 text-left">
            <div className="flex items-center gap-2 text-accent font-semibold text-sm">
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </div>
            <h3 className="text-sm font-bold text-foreground">
              {education.degree}
            </h3>
            <p className="text-xs text-muted-foreground">
              {education.institution}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
              <span>{education.location}</span>
              <span className="text-accent font-mono">{education.period}</span>
            </div>
          </div>

          {/* Languages Card */}
          <div className="p-6 rounded-xl bg-card border border-border space-y-3 text-left">
            <div className="flex items-center gap-2 text-accent font-semibold text-sm">
              <Languages className="h-4 w-4" />
              <span>Languages</span>
            </div>
            <div className="space-y-2 text-sm">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-xs text-muted-foreground">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
