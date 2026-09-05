import { Header } from '@/components/header';
import { ProfileSummary } from '@/components/profile-summary';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { SkillsShowcase } from '@/components/skills-showcase';
import { ProjectHighlights } from '@/components/project-highlights';
import { AboutPublication } from '@/components/about-publication';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-10 sm:gap-12">
        <ProfileSummary />
        <ExperienceTimeline />
        <SkillsShowcase />
        <ProjectHighlights />
        <AboutPublication />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
