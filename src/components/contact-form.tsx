
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import portfolioData from '@/lib/portfolio-data.json';
import { Mail } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


export function ContactForm() {
  const { links } = portfolioData.profile;

  return (
    <section id="contact">
      <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Contact Me</h2>
      <p className="mt-2 text-lg text-muted-foreground">Have a question or want to work together?</p>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Reach out to me via Email or WhatsApp.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="w-full">
                    <a href={`mailto:${links.email}`}>
                        <Mail className="mr-2 h-5 w-5" />
                        Send an Email
                    </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                    <a href={`https://wa.me/${links.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                       <WhatsAppIcon className="mr-2 h-5 w-5" />
                        Message on WhatsApp
                    </a>
                </Button>
            </div>
        </CardContent>
      </Card>
    </section>
  );
}
