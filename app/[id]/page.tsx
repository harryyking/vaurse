import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import DetailsPageClient from '@/components/DetailClient';

const getCharacterDetails = async (id: number) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch character details');
  }
  return res.json();
};

export default async function DetailsPage( {params,
}: {
  params: Promise<{ id: number }>
}) {
  const {id} = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacterDetails(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DetailsPageClient characterId={id} />
    </HydrationBoundary>
  );
}