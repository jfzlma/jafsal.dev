'use client';

import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, Clock } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';
import { calculateExperience } from '@/lib/experience';

export function ExperienceTimeline() {
  const { experience } = portfolioData;
  const [expDuration, setExpDuration] = useState(() => calculateExperience());

  useEffect(() => {
    setExpDuration(calculateExperience());
  }, []);

  return (
    <section id="experience" className="pt-10 sm:pt-12 border-t border-border/50 space-y-6 text-left">
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Professional Experience
          </h2>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono text-accent self-start sm:self-auto">
            <Clock className="h-3.5 w-3.5" />
            <span>{expDuration.formattedFull}</span>
          </div>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground">
          Career tenure since 18 December 2018 across data operations leadership, distributed ingestion systems, and high-throughput pipelines.
        </p>
      </div>

      <div className="space-y-8">
        {experience.map((exp, index) => {
          const isCurrent = index === 0;

          return (
            <article
              key={`${exp.company}-${index}`}
              className="relative p-6 sm:p-7 rounded-xl bg-card border border-border space-y-4 hover:border-accent/40 transition-colors"
            >
              {/* Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-border/60 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    {isCurrent && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-accent">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5 font-medium text-foreground/80">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullets (Verbatim from CV) */}
              <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed pl-4 list-disc marker:text-accent">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="pl-1">
                    <span className="text-foreground/90 font-sans">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
