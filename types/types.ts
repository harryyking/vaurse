export interface CharacterSchema {
        id : number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender : string;
        origin: {
            name: string;
            link: string;
        };
        location: {
            name: string;
            link: string;
        };
        image: string;
        episode: string[];
        url : string 
        created: string;
}


export interface ApiInfo {
    count: number;
    pages: number;
    next: string | null; // URL to the next page, or null if no next page
    prev: string | null; // URL to the previous page, or null if no previous page
}

export interface DetailsPageClientProps {
    characterId: number; // Or string, if your route parameter is a string
}

export interface CharacterApiResponse {
    info: ApiInfo;
    results: CharacterSchema[]; // An array of CharacterSchema objects
}

import { InfiniteData } from '@tanstack/react-query';

export type CharactersInfiniteData = InfiniteData<CharacterApiResponse, number>;