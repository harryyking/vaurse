'use client';

import Link from 'next/link';
import { useQueryClient } from '@tanstack/react-query';
import { CharacterSchema } from '@/types/types'; 
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'; 
import Image from 'next/image';
import { getCharacterDetails } from '@/lib/server';



const CharacterCard = ({ character }: { character: CharacterSchema }) => {
  const queryClient = useQueryClient();

  const prefetchCharacter = async () => {
    // Only prefetch if the data isn't already in the cache
    if (!queryClient.getQueryData(['character', character.id])) {
      await queryClient.prefetchQuery({
        queryKey: ['character', character.id],
        queryFn: () => getCharacterDetails(character.id),
      });
    }
  };

  return (
    <Link href={`/${character.id}`} passHref>
      <Card
        onMouseEnter={prefetchCharacter}
        className="relative overflow-hidden group h-full flex flex-col p-0
                   transform transition-all duration-300 ease-in-out
                   hover:scale-100 hover:shadow-2xl hover:shadow-primary/50 hover:z-10
                  border-none rounded-lg" 
      >
        <CardHeader className="p-0 flex-shrink-0">
      
          <div className="relative w-full pb-[100%] sm:pb-[130%] lg:pb-[150%] xl:pb-[120%] 2xl:pb-[100%] rounded-t-lg overflow-hidden">
            <Image
              src={character.image}
              alt={character.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
              className="object-cover transition-transform duration-300 group-hover:scale-105" // Subtle image zoom on hover
            />
          </div>
        </CardHeader>


        <CardContent className="flex-grow p-4 text-center">
          <CardTitle className="text-lg font-semibold mb-1 truncate text-foreground">
            {character.name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {character.species}
          </CardDescription>
        </CardContent>

      </Card>
    </Link>
  );
};

export default CharacterCard;