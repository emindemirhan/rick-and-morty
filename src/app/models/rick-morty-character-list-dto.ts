import { RickMortyInfoDto } from './rick-morty-info-dto';
import { RickMortyCharacterDto } from './rick-morty-character-dto';

export interface RickMortyCharacterListDto {
  results: RickMortyCharacterDto[];
  info: RickMortyInfoDto;
}
