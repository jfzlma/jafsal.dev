'use client';

import React from 'react';
import { Activity, ShoppingBag, Globe, BookOpen, ExternalLink, Link2, FileText, MapPin } from 'lucide-react';
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

function SampleColumn({ icon, label, items }: { icon: React.ReactNode; label: string; items: { label: string; href: string }[] }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 pb-2 border-b border-border/60 mb-3">
        {icon}
        <span className="text-xs font-medium text-foreground/90">{label}</span>
      </div>
      <ul className="space-y-1.5 text-xs">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block truncate text-muted-foreground/80 hover:text-accent hover:underline py-1"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
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
          Production crawling fleet covering{' '}
          <strong className="text-foreground/90">Amazon across all major regions</strong>, top Indian e-commerce
          platforms, US/UK retailers, GCC marketplaces, and SE Asian marketplaces — alongside government, customs,
          trade, sanctions, and financial targets across <strong className="text-foreground/90">30+ countries</strong>.
          Mix of native mobile app targets, authenticated portals, dynamic JavaScript pages, and structured
          XML/API feeds, ingested and validated in ArangoDB and Elasticsearch.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
          {/* Representative examples — gov / customs / trade / sanctions / financial */}
          <SampleColumn
            icon={<FileText className="h-3.5 w-3.5 text-accent" />}
            label="Gov / customs / trade / sanctions / financial"
            items={[
              { label: 'customs.gov.cn — China customs', href: 'https://customs.gov.cn' },
              { label: 'webgate.ec.europa.eu — EU sanctions XML', href: 'https://webgate.ec.europa.eu/fsd/fsf/public/files/xmlFullSanctionsList_1_1/content' },
              { label: 'ofac.treasury.gov — US sanctions', href: 'https://ofac.treasury.gov/recent-actions' },
              { label: 'icegate.gov.in — Indian customs', href: 'https://www.icegate.gov.in' },
              { label: 'ecb.europa.eu — Euro FX reference XML', href: 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml' },
            ]}
          />

          {/* Representative examples — e-commerce */}
          <SampleColumn
            icon={<ShoppingBag className="h-3.5 w-3.5 text-accent" />}
            label="E-commerce: Amazon · India · US/UK · GCC · SE Asia"
            items={[
              { label: 'Amazon — all major regions', href: 'https://www.amazon.com' },
              { label: 'Flipkart — India', href: 'https://www.flipkart.com' },
              { label: 'Meesho — India', href: 'https://www.meesho.com' },
              { label: 'Walmart / Target / Best Buy — US', href: 'https://www.walmart.com' },
              { label: 'Noon / Souq — GCC', href: 'https://www.noon.com' },
              { label: 'Lazada / Shopee — SE Asia', href: 'https://www.lazada.sg' },
            ]}
          />
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary border border-border">
            <MapPin className="h-3 w-3" />
            30+ countries
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary border border-border">
            <Activity className="h-3 w-3" />
            100+ targets across domains
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary border border-border">
            Amazon (all regions)
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary border border-border">
            Indian / US / UK / GCC / SE Asia ecommerce
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary border border-border">
            Mobile app crawling
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary border border-border">
            Authenticated portals
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary border border-border">
            Dynamic JS targets
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary border border-border">
            Structured XML / API feeds
          </span>
        </div>
      </div>
    </section>
  );
}
