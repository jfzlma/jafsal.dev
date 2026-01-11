
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import portfolioData from '@/lib/portfolio-data.json';
import profilePic from '../../public/profile.png';
import { Download } from 'lucide-react';

const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

export function ProfileSummary() {
  const { name, headline, summary, links } = portfolioData.profile;

  return (
    <section id="home" className="pt-8 md:pt-16">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
        <div className="order-2 md:order-1 md:col-span-2">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
            {name}
          </h1>
          <h2 className="mt-2 font-headline text-2xl font-semibold text-accent md:text-3xl">
            {headline}
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            {summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={links.linkedIn} target="_blank" rel="noopener noreferrer">View LinkedIn</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/jafsal_resume.pdf" target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
        <div className="order-1 flex items-center justify-center md:order-2">

          <Image
            src={profilePic}
            alt={portfolioData.profile.name}
            width={300}
            height={300}
            className="aspect-square rounded-full border-4 border-primary/10 object-cover shadow-lg"
            priority
          />

        </div>
      </div>
    </section>
  );
}
