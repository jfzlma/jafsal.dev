
import { Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portfolioData from '@/lib/portfolio-data.json';

const StackOverflowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56M6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85m1.16-4.21l.76-1.61 8.14 3.78-.76 1.62-8.14-3.79m2.26-3.99l1.15-1.35 6.9 5.76-1.15 1.35-6.9-5.76m4.45-4.25L20 9.08l-1.44 1.07-5.36-7.21 1.44-1.07M6.59 18.41v-1.8h8.98v1.8H6.59z" />
  </svg>
);



export function Footer() {
  const currentYear = new Date().getFullYear();
  const { links } = portfolioData.profile;

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {portfolioData.profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={links.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={links.stackoverflow} target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
              <StackOverflowIcon className="h-5 w-5" />
            </a>
          </Button>

        </div>
      </div>
    </footer>
  );
}
