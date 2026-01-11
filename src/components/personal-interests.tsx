
'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';

import portfolioData from '@/lib/portfolio-data.json';
import { PlaceHolderImages } from '@/lib/placeholder-images';


export function PersonalInterests() {
    const { title, description, travels, cars } = portfolioData.personalInterests;

    return (
        <section id="interests">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">{title}</h2>
            <p className="mt-2 text-lg text-muted-foreground">{description}</p>

            <Tabs defaultValue="travel" className="mt-8">
                <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
                    <TabsTrigger value="travel"><MapPin className="mr-2 h-4 w-4" /> {travels.title}</TabsTrigger>
                    <TabsTrigger value="cars"><Car className="mr-2 h-4 w-4" /> {cars.title}</TabsTrigger>
                </TabsList>
                <TabsContent value="travel">
                    {travels.items.length > 0 ? (
                        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {travels.items.map((trip) => {
                                const image = PlaceHolderImages.find(p => p.id === trip.imageId);
                                return (
                                    <Dialog key={trip.place}>
                                        <DialogTrigger asChild>
                                            <Card className="cursor-pointer overflow-hidden transition-shadow hover:shadow-xl">
                                                {image && (
                                                    <Image
                                                        src={image.imageUrl}
                                                        alt={image.description}
                                                        data-ai-hint={image.imageHint}
                                                        width={600}
                                                        height={400}
                                                        className="aspect-video w-full object-cover"
                                                    />
                                                )}
                                                <CardHeader>
                                                    <CardTitle>{trip.place}</CardTitle>
                                                    <CardDescription>{trip.country}</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-sm text-muted-foreground">{trip.description}</p>
                                                </CardContent>
                                            </Card>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-3xl">
                                            <DialogHeader>
                                                <DialogTitle>{trip.place}, {trip.country}</DialogTitle>
                                                <DialogDescription asChild>
                                                    <div className="mt-2 flex flex-wrap gap-2">
                                                        {trip.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                                    </div>
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-6 py-4">
                                                <Carousel className="w-full">
                                                    <CarouselContent>
                                                        {trip.gallery.map((imgId, index) => {
                                                            const galleryImage = PlaceHolderImages.find(p => p.id === imgId);
                                                            return galleryImage ? (
                                                                <CarouselItem key={index}>
                                                                    <Image
                                                                        src={galleryImage.imageUrl}
                                                                        alt={galleryImage.description}
                                                                        data-ai-hint={galleryImage.imageHint}
                                                                        width={1200}
                                                                        height={800}
                                                                        className="aspect-video w-full rounded-md object-cover"
                                                                    />
                                                                </CarouselItem>
                                                            ) : null;
                                                        })}
                                                    </CarouselContent>
                                                    <CarouselPrevious />
                                                    <CarouselNext />
                                                </Carousel>
                                                <p className="text-base leading-relaxed text-muted-foreground">{trip.details}</p>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                );
                            })}
                        </div>
                    ) : (
                        <Card className="mt-6">
                            <CardContent className="flex min-h-[200px] items-center justify-center">
                                <p className="text-center text-muted-foreground">
                                    <MapPin className="mx-auto mb-2 h-12 w-12 opacity-50" />
                                    No travel experiences added yet. Stay tuned for upcoming adventures!
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>
                <TabsContent value="cars">
                    {cars.items.length > 0 ? (
                        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {cars.items.map((car) => {
                                const image = PlaceHolderImages.find(p => p.id === car.imageId);
                                return (
                                    <Card key={car.model} className="overflow-hidden transition-shadow hover:shadow-xl">
                                        {image && (
                                            <Image
                                                src={image.imageUrl}
                                                alt={image.description}
                                                data-ai-hint={image.imageHint}
                                                width={600}
                                                height={400}
                                                className="aspect-video w-full object-cover"
                                            />
                                        )}
                                        <CardHeader>
                                            <CardTitle>{car.make} {car.model}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{car.notes}</p>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    ) : (
                        <Card className="mt-6">
                            <CardContent className="flex min-h-[200px] items-center justify-center">
                                <p className="text-center text-muted-foreground">
                                    <Car className="mx-auto mb-2 h-12 w-12 opacity-50" />
                                    No car experiences added yet. More to come soon!
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>
            </Tabs>
        </section>
    );
}
