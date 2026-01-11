
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Cloud, Cog, ShieldCheck, Microscope, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';

const icons: { [key: string]: LucideIcon } = {
  Code,
  Database,
  Cloud,
  Cog,
  ShieldCheck,
  Microscope,
  Cpu,
};

type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = portfolioData.skills;

export function SkillsShowcase() {
  return (
    <section id="skills">
      <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Technical Skills</h2>
      <p className="mt-2 text-lg text-muted-foreground">A snapshot of my technical capabilities.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const IconComponent = icons[category.icon];
          return (
            <Card key={category.title} className="flex flex-col transition-transform hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {IconComponent && <IconComponent className="h-8 w-8 text-accent" />}
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-grow flex-wrap content-start gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
