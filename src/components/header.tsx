
"use client";

import Link from 'next/link';
import { Github, Linkedin, Menu, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portfolioData from '@/lib/portfolio-data.json';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const StackOverflowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56M6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85m1.16-4.21l.76-1.61 8.14 3.78-.76 1.62-8.14-3.79m2.26-3.99l1.15-1.35 6.9 5.76-1.15 1.35-6.9-5.76m4.45-4.25L20 9.08l-1.44 1.07-5.36-7.21 1.44-1.07M6.59 18.41v-1.8h8.98v1.8H6.59z" />
  </svg>
);




export function Header() {
  const { name, links } = portfolioData.profile;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#interests", label: "Interests" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">

          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-left">{name}</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden flex-1 items-center justify-end space-x-2 md:flex">
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
    </header>
  );
}
