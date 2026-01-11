import { Header } from '@/components/header';
import { ProfileSummary } from '@/components/profile-summary';
import { SkillsShowcase } from '@/components/skills-showcase';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { ProjectHighlights } from '@/components/project-highlights';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';
import { PersonalInterests } from '@/components/personal-interests';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="container mx-auto flex-grow px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-24 md:gap-32">
          <ProfileSummary />
          <SkillsShowcase />
          <ExperienceTimeline />
          {/* <ProjectHighlights /> */}
          <PersonalInterests />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
