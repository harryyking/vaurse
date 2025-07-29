import { CharacterApiResponse, CharacterSchema } from "@/types/types";



export const getCharacters = async ({ pageParam = 1 }): Promise<CharacterApiResponse> => {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${pageParam}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch characters: ${res.statusText}`);
    }
    return res.json();
  };


export const getCharacterDetails = async (id: number) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!res.ok) throw new Error('Failed to fetch details');
    return res.json();
  };


  export const getCharacterDetailsId = async (id: number): Promise<CharacterSchema> => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!res.ok) {
        // Provide more descriptive error for debugging
        throw new Error(`Failed to fetch character details for ID ${id}: ${res.statusText}`);
    }
    return res.json();
};