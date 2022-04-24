export interface CharacterCardResponseType {
  image: string;
  gender: string;
  species: string;
  name: string;
  id: number;
  status: string;
  episode: Array<string>;
  location: { name: string; url: string };
  origin?: { name: string };
}

export interface paginationType {
  pages: number;
  count: number;
}

export type CharacterResponseType = {
  results: Array<CharacterCardResponseType>;
  info: paginationType;
};
