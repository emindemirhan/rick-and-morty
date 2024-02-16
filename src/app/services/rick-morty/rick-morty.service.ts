import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RickMortyCharacterListDto } from 'src/app/models/rick-morty-character-list-dto';
import { RickMortyCharacterDto } from 'src/app/models/rick-morty-character-dto';
import { RickMortyDetailDto } from 'src/app/models/rick-morty-detail-dto';
import { SearchParamsDto } from 'src/app/models/search-params-dto';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private readonly baseUrl: string = `https://rickandmortyapi.com/api`;
  private readonly characterListUrl: string = `${this.baseUrl}/character`;

  constructor(private readonly http: HttpClient) {}

  findAllCharacters(page: number = 0): Observable<RickMortyCharacterListDto> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('page', page);

    return this.http.get<RickMortyCharacterListDto>(this.characterListUrl, {
      params: httpParams,
    });
  }

  searchsAllCharactersByName(
    searchParamsDto: SearchParamsDto
  ): Observable<RickMortyCharacterListDto> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('name', searchParamsDto.name);
    httpParams = httpParams.append('status', searchParamsDto.status);
    httpParams = httpParams.append('type', searchParamsDto.type);
    httpParams = httpParams.append('gender', searchParamsDto.gender);
    httpParams = httpParams.append('page', searchParamsDto.page);

    return this.http.get<RickMortyCharacterListDto>(this.characterListUrl, {
      params: httpParams,
    });
  }

  findCharacterById(id: number): Observable<RickMortyDetailDto> {
    return this.http.get<RickMortyDetailDto>(`${this.characterListUrl}/${id}`);
  }
}
