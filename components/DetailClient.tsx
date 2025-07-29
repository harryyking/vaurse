'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

// Import your types
import { CharacterSchema, DetailsPageClientProps } from '@/types/types';

// Import Shadcn Card components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button'; 
import { getCharacterDetailsId } from '@/lib/server';



export default function DetailsPageClient({ characterId }: DetailsPageClientProps) {
    const { 
        data: character, 
        error, 
        isLoading 
    } = useQuery<CharacterSchema, Error>({ 
        queryKey: ['character', characterId],
        queryFn: () => getCharacterDetailsId(characterId),
        staleTime: 1000 * 60 * 60, 
        gcTime: 1000 * 60 * 60 * 24,
    });

   
    if (isLoading) return (
        <div className="text-center py-20 text-xl text-muted-foreground">
            Loading character details...
        </div>
    );


    if (error) return (
        <div className="text-center py-20 text-destructive text-xl">
            Error: {error.message}
        </div>
    );

    // This check is important after loading and error states to ensure 'character' is defined
    if (!character) return (
      <div className="text-center py-20 text-muted-foreground text-xl">
        Character not found.
      </div>
    );

    // Helper for status indicator color based on theme colors
    const getStatusColorClass = (status: string) => {
        switch (status) {
            case 'Alive':
                return 'bg-green-500'; 
            case 'Dead':
                return 'bg-destructive'; 
            default: 
                return 'bg-muted-foreground'; 
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Link href="/" passHref>
                {/* Using Shadcn Button component */}
                <Button className="mb-8">
                    &larr; Back to List
                </Button>
            </Link>

            {/* Using Shadcn Card for the main details block */}
            <Card className="rounded-lg shadow-xl overflow-hidden md:flex bg-card text-card-foreground p-0">
                <CardHeader className="p-0 flex-shrink-0">
                    <div className="relative w-full h-80 md:h-full"> 
                        <Image
                            src={character.image}
                            alt={character.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw" 
                            className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                            priority 
                        />
                    </div>
                </CardHeader>
                
                <CardContent className="p-6 md:p-8 flex-grow">
                    {/* Character Name */}
                    <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                        {character.name}
                    </CardTitle>
                    
                    {/* Status & Species */}
                    <div className="flex items-center mb-4">
                        <span className={`h-3 w-3 rounded-full mr-2 ${getStatusColorClass(character.status)}`}></span>
                        <CardDescription className="text-lg text-foreground"> 
                            {character.status} - {character.species}
                            {character.type && ` (${character.type})`}
                        </CardDescription>
                    </div>

                    {/* Gender and Origin (Added details) */}
                    <div className="mb-4 text-muted-foreground">
                        <p><strong>Gender:</strong> {character.gender}</p>
                        {character.origin.name !== 'unknown' && (
                            <p><strong>Origin:</strong> {character.origin.link}</p>
                        )}
                    </div>

                    {/* Last Known Location */}
                    <div className="mb-6">
                        <p className="text-muted-foreground text-sm">Last known location:</p>
                        <p className="text-lg text-foreground">{character.location.name}</p>
                    </div>

                    {/* Episodes List */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Episodes</h2>
                        <ul className="h-48 overflow-y-auto bg-muted/20 p-3 rounded-md space-y-2 text-foreground">
                            {character.episode.length > 0 ? (
                                character.episode.map((epUrl, index) => (
                                    <li key={index} className="text-sm">
                                        {/* Extract episode number from URL */}
                                        {`Episode ${epUrl.split('/').pop()}`}
                                    </li>
                                ))
                            ) : (
                                <li className="text-muted-foreground">No episodes found.</li>
                            )}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}