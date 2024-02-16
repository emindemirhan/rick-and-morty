import { RickMortyLocationDto } from './rick-morty-location-dto';

export interface RickMortyDetailDto {
  id: number;
  created: string;
  episode: string[];
  gender: string;
  image: string;
  location: RickMortyLocationDto;
  origin: RickMortyLocationDto;
  type: string;
  name: string;
  status: string;
  species: string;
}
