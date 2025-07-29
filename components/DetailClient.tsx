'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { CharacterSchema, DetailsPageClientProps } from '@/types/types';

import {
  Card,
  CardContent,
  CardDescription,
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

  if (!character) return (
    <div className="text-center py-20 text-muted-foreground text-xl">
      Character not found.
    </div>
  );

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
        <Button className="mb-8">
          &larr; Back to List
        </Button>
      </Link>

      <Card className="rounded-lg shadow-xl overflow-hidden md:flex bg-card text-card-foreground p-0">
        
        <div className="relative w-full h-80 md:ml-8 md:w-96 md:h-96 overflow-hidden">
         
          <Image
            src={character.image}
            alt={character.name}
            fill
            sizes="(max-width: 768px) 100vw, 384px" 
            className="object-cover rounded"
            priority
          />
        </div>

        {/* CardContent */}
        <CardContent className="p-6 md:p-8 flex-grow">
          <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
            {character.name}
          </CardTitle>

          <div className="flex items-center mb-4">
            <span className={`h-3 w-3 rounded-full mr-2 ${getStatusColorClass(character.status)}`}></span>
            <CardDescription className="text-lg text-foreground">
              {character.status} - {character.species}
              {character.type && ` (${character.type})`}
            </CardDescription>
          </div>

          <div className="mb-4 text-muted-foreground">
            <p><strong>Gender:</strong> {character.gender}</p>
            {character.origin.name !== 'unknown' && (
              <p><strong>Origin:</strong> {character.origin.name}</p> 
            )}
          </div>

          <div className="mb-6">
            <p className="text-muted-foreground text-sm">Last known location:</p>
            <p className="text-lg text-foreground">{character.location.name}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Episodes</h2>
            <ul className="h-48 overflow-y-auto bg-muted/20 p-3 rounded-md space-y-2 text-foreground">
              {character.episode.length > 0 ? (
                character.episode.map((epUrl, index) => (
                  <li key={index} className="text-sm">
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