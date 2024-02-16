import { RickMortyInfoDto } from './rick-mort-info-dto';
import { RickMortyCharacterDto } from './rick-morty-character-dto';

export interface RickMortyCharacterListDto {
  results: RickMortyCharacterDto[];
  info: RickMortyInfoDto;
}
