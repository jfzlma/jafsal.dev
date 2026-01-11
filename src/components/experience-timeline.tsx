
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building } from 'lucide-react';
import portfolioData from '@/lib/portfolio-data.json';

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
};

const experiences: Experience[] = portfolioData.experience;

export function ExperienceTimeline() {
  return (
    <section id="experience">
      <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Professional Experience</h2>
      <p className="mt-2 text-lg text-muted-foreground">My career journey so far.</p>
      <div className="relative mt-12 space-y-12 pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[42px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-background ring-8 ring-background">
              <Building className="h-5 w-5 text-accent" />
            </div>
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <CardTitle>{exp.role}</CardTitle>
                  <p className="whitespace-nowrap text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <CardDescription>{exp.company} &bull; {exp.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 list-disc space-y-2 pl-5 text-sm">
                  {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
