'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function ContactForm() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-10 sm:pt-12 border-t border-border/50 space-y-6 text-left">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Contact
        </h2>
        <p className="mt-1 text-sm sm:text-base text-muted-foreground">
          Reach out for technical lead roles, large-scale data engineering projects, or agentic AI collaborations.
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-xl bg-card border border-border space-y-6">
        {/* Email Copy Card */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Direct Email
            </span>
            <div className="text-base sm:text-lg font-mono font-medium text-foreground">
              {profile.links.email}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-card hover:bg-secondary border border-border text-xs font-medium text-foreground transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-accent" />
                  <span className="text-accent font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-accent text-accent-foreground font-semibold text-xs hover:bg-accent/90 transition-colors shadow-sm"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href={`https://wa.me/${profile.links.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/60 border border-border hover:border-accent/40 flex items-center justify-between transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-card border border-border text-accent">
                <WhatsAppIcon className="h-4 w-4" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">WhatsApp</div>
                <div className="text-xs text-muted-foreground">{profile.phone}</div>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </a>

          <a
            href={profile.links.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/60 border border-border hover:border-accent/40 flex items-center justify-between transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-card border border-border text-accent">
                <span className="font-bold text-xs font-mono">in</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">LinkedIn</div>
                <div className="text-xs text-muted-foreground">in/jfzlma</div>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/60 border border-border hover:border-accent/40 flex items-center justify-between transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-card border border-border text-accent">
                <span className="font-bold text-xs font-mono">gh</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">GitHub</div>
                <div className="text-xs text-muted-foreground">github/jfzlma</div>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
