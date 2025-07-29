'use client';

import { useInfiniteQuery } from '@tanstack/react-query'; 
import CharacterCard from './CharacterCard';
import React from 'react';
import { CharacterApiResponse, CharacterSchema, CharactersInfiniteData } from '@/types/types';
import { getCharacters } from '@/lib/server';




export default function HomePageClient() {
  const {
    data, 
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<
    CharacterApiResponse, 
    Error,                   
    CharactersInfiniteData,  // TData: The type of the aggregated data stored in the cache
    string[],                // TQueryKey: The type of the queryKey (e.g., ['characters'])
    number                   // TPageParam: The type of the page parameter (e.g., 1, 2, 3...)
  >({
    queryKey: ['characters'],
    queryFn: getCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage: CharacterApiResponse) => { 
      const nextUrl = lastPage.info.next;
      if (!nextUrl) return undefined;
      const page = new URL(nextUrl).searchParams.get('page');
      return page ? Number(page) : undefined;
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">

      <h1 className="mt-10 text-4xl md:text-5xl font-semibold font-schwifty text-primary mb-8">
        Find Rick and Morty Characters
      </h1>
      
      {error && <div className="text-center text-destructive">Error: {error.message}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.results.map((character: CharacterSchema) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
  
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-lg
                     transition-colors duration-300
                     disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed
                     focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
        </button>
      </div>

      {isFetching && !isFetchingNextPage ? <div className="text-center py-4 text-muted-foreground">Loading...</div> : null}
    </div>
  );
}