'use client';

import { useInfiniteQuery } from '@tanstack/react-query'; // Removed useQueryClient if not directly used outside hooks
import Link from 'next/link';
import CharacterCard from './CharacterCard';
import React from 'react';
import { CharacterApiResponse, CharacterSchema, CharactersInfiniteData } from '@/types/types';

// API fetching function (can be in a separate lib/api.js file)
// Added return type Promise<CharacterApiResponse> for stronger type safety
const getCharacters = async ({ pageParam = 1 }): Promise<CharacterApiResponse> => {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${pageParam}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch characters: ${res.statusText}`);
  }
  return res.json();
};

// getCharacterDetails function (kept here for completeness, but typically in a separate API file)
// Added return type Promise<CharacterSchema>
const getCharacterDetails = async (id: number): Promise<CharacterSchema> => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch character details for ID ${id}: ${res.statusText}`);
  }
  return res.json();
};


export default function HomePageClient() {
  const {
    data, // Type: CharactersInfiniteData | undefined
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<
    CharacterApiResponse, // TQueryFnData: The type of data returned by queryFn for a single page
    Error,                   // TError: The type of error that can be thrown
    CharactersInfiniteData,  // TData: The type of the aggregated data stored in the cache
    string[],                // TQueryKey: The type of the queryKey (e.g., ['characters'])
    number                   // TPageParam: The type of the page parameter (e.g., 1, 2, 3...)
  >({
    queryKey: ['characters'],
    queryFn: getCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage: CharacterApiResponse) => { // lastPage is correctly typed here
      const nextUrl = lastPage.info.next;
      if (!nextUrl) return undefined;
      const page = new URL(nextUrl).searchParams.get('page');
      return page ? Number(page) : undefined;
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mt-10 text-4xl md:text-5xl font-semibold text-primary mb-8">
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
          // Updated button styling to use theme colors and provide better feedback
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-lg
                     transition-colors duration-300
                     disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed
                     focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
        </button>
      </div>

      {/* Updated loading message text color to muted-foreground */}
      {isFetching && !isFetchingNextPage ? <div className="text-center py-4 text-muted-foreground">Loading...</div> : null}
    </div>
  );
}