import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import HomePageClient from '@/components/HomeClient';
import Header from '@/components/Header';

// API fetching function
const getCharacters = async (page = 1) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  if (!res.ok) {
    throw new Error('Failed to fetch characters');
  }
  return res.json();
};

export default async function HomePage() {
  const queryClient = new QueryClient();

  // Prefetch the first page of data on the server
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['characters'],
    queryFn: () => getCharacters(1),
    initialPageParam: 1,
  });

  return (
   <>

   <Header/>
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePageClient />
    </HydrationBoundary>
   </>
  );

}