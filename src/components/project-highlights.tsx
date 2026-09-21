'use client';

import React from 'react';
import { Activity, ShoppingBag, Globe, BookOpen, ExternalLink, Link2, FileText } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  'structural-health-monitoring': <Activity className="h-5 w-5 text-accent" />,
  'rapid-prototyping-food-app': <ShoppingBag className="h-5 w-5 text-accent" />,
  'web-applications-portfolio': <Globe className="h-5 w-5 text-accent" />,
  'web-crawling-fleet': <Activity className="h-5 w-5 text-accent" />,
};

function EvidenceBlock({ project }: { project: typeof portfolioData.projects[0] }) {
  if (!project.evidence) return null;
  const ev = project.evidence;
  return (
    <div className="p-3 rounded-lg bg-secondary/60 border border-border text-xs space-y-1.5">
      <div className="flex items-center gap-1.5 font-semibold text-accent">
        <Link2 className="h-3.5 w-3.5" />
        <span>{ev.title}</span>
      </div>
      <p className="text-muted-foreground">{ev.summary}</p>
      {ev.url && (
        <a
          href={ev.url}
          className="text-accent hover:underline inline-flex items-center gap-1 font-medium"
        >
          <span>View section</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}

export function ProjectHighlights() {
  const { projects } = portfolioData;

  // Order: flagship first, then the rest
  const ordered = [
    projects.find((p) => p.id === 'web-crawling-fleet'),
    projects.find((p) => p.id === 'structural-health-monitoring'),
    projects.find((p) => p.id === 'rapid-prototyping-food-app'),
    projects.find((p) => p.id === 'web-applications-portfolio'),
  ].filter(Boolean);

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
        {ordered.map((project) => (
          <article
            key={project!.id}
            className="p-6 rounded-xl bg-card border border-border flex flex-col justify-between space-y-4 hover:border-accent/40 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-secondary border border-border">
                  {PROJECT_ICONS[project!.id] || <Activity className="h-5 w-5 text-accent" />}
                </div>
                <h3 className="text-lg font-bold text-foreground leading-snug">
                  {project!.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project!.description}
              </p>

              {project!.publication && (
                <div className="p-3 rounded-lg bg-secondary/60 border border-border text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-semibold text-accent">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Research Paper</span>
                    </div>
                    {project!.publication.url && (
                      <a
                        href={project!.publication.url}
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
                    &quot;{project!.publication.title}&quot; — {project!.publication.journal} ({project!.publication.date})
                  </p>
                </div>
              )}

              <EvidenceBlock project={project!} />

              {project!.note && (
                <div className="p-3 rounded-lg bg-accent/5 border border-border/60 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground/80">Note.</span> {project!.note}
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
              {project!.tech.map((t) => (
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

      {/* Crawling fleet evidence panel */}
      <div id="crawling-fleet" className="mt-6 p-6 rounded-xl bg-card border border-border text-left">
        <div className="flex items-center gap-2 pb-3 border-b border-border/60">
          <Activity className="h-4 w-4 text-accent" />
          <h3 className="text-sm font-semibold text-foreground">Source portfolio — crawling targets</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Representative sample of live targets built and maintained across government, customs, trade, sanctions,
          and financial domains. A mix of public pages, authenticated portals, dynamic JavaScript targets, and
          structured XML feeds.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
          {crawlingSample.map((u, i) => (
            <div key={i} className="truncate bg-secondary/40 border border-border/60 rounded-md px-3 py-2">
              <span className="text-muted-foreground/80 break-all">{u}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="px-2.5 py-1 rounded-full bg-secondary border border-border">102 targets</span>
          <span className="px-2.5 py-1 rounded-full bg-secondary border border-border">88 unique domains</span>
          <span className="px-2.5 py-1 rounded-full bg-secondary border border-border">30+ countries</span>
          <span className="px-2.5 py-1 rounded-full bg-secondary border border-border">Gov / customs / trade / sanctions / financial</span>
        </div>
      </div>
    </section>
  );
}

const crawlingSample: string[] = [
  "gov.br",
  "customs.gov.cn",
  "www.fbi.gov/wanted/fugitives",
  "eservices.zatca.gov.sa",
  "www.sec.gov",
  "www.finma.ch",
  "www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml",
  "www.trade-tariff.service.gov.uk",
  "sanctionsmap.eu",
  "webgate.ec.europa.eu/fsd/fsf/public/files/xmlFullSanctionsList_1_1/content",
  "ofac.treasury.gov/recent-actions",
  "www.icegate.gov.in",
  "www.customs.gov.bh/ar/tariff-finder",
  "www.singlewindow.cn",
  "www.kanzei.or.jp/statistical/expstatis/headline/hs1dig/e/",
  "portal.moi.gov.qa",
  "www.federalregister.gov/documents/search",
  "www.pst.ag",
  "insw.go.id",
  "macmap.org",
];
