'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Download } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';
import { calculateExperience } from '@/lib/experience';

export function ProfileSummary() {
  const { profile } = portfolioData;
  const [exp, setExp] = useState(() => calculateExperience());

  useEffect(() => {
    setExp(calculateExperience());
  }, []);

  return (
    <section id="about" className="text-left space-y-6 max-w-3xl">
      {/* Heading */}
      <div className="space-y-3">
        <h1 className="text-5xl sm:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.05]">
          Jafsal <span className="text-accent italic font-normal">M A.</span>
        </h1>

        <div className="flex items-center flex-wrap gap-2.5 pt-1">
          <p className="text-base sm:text-lg text-muted-foreground font-sans">
            Senior Python Developer &amp; Technical Lead –{' '}
            <strong className="text-foreground font-semibold">7+ years</strong>
          </p>
          <span
            className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent cursor-help"
            title={`Career started 18 Dec 2018 (${exp.formattedFull})`}
          >
            {exp.formattedShort} exp
          </span>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground">
          {profile.location} · <span className="text-accent font-medium">PST.AG (Remote)</span>
        </p>
      </div>

      {/* About Statement */}
      <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
        <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
          {profile.about?.intro || profile.summary}
        </p>

        {profile.about?.specialisations && (
          <div className="space-y-2 py-1">
            <p className="text-sm sm:text-base font-semibold text-foreground">
              {profile.about.specialisationsTitle}
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              {profile.about.specialisations.map((spec, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-accent font-bold shrink-0 mt-0.5 select-none">→</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {profile.about?.recent && (
          <p className="text-sm sm:text-base leading-relaxed">
            {profile.about.recent}
          </p>
        )}

        {profile.about?.closing && (
          <p className="text-sm sm:text-base text-foreground/90 font-medium pt-1">
            {profile.about.closing}
          </p>
        )}
      </div>

      {/* Action CTAs */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm transition-colors shadow-sm"
        >
          <Mail className="h-4 w-4" />
          <span>Get in Touch</span>
        </a>

        <a
          href="/jafsal_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card hover:bg-secondary border border-border text-foreground font-medium text-sm transition-colors"
        >
          <Download className="h-4 w-4 text-accent" />
          <span>Download CV (PDF)</span>
        </a>
      </div>
    </section>
  );
}
