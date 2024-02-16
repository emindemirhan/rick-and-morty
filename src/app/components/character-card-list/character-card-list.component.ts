import { Component, OnInit, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { RickMortyCharacterListDto } from 'src/app/models/rick-morty-character-list-dto';
import { SearchParamsDto } from 'src/app/models/search-params-dto';

import { RickMortyService } from 'src/app/services/rick-morty/rick-morty.service';

@Component({
  selector: 'app-character-card-list',
  templateUrl: './character-card-list.component.html',
  styleUrls: ['./character-card-list.component.scss'],
})
export class CharacterCardListComponent implements OnInit {
  characters: RickMortyCharacterListDto = {} as RickMortyCharacterListDto;
  @ViewChild('paginator', { static: true }) paginator: Paginator | undefined;
  searchParams: SearchParamsDto = {
    name: '',
    status: '',
    type: '',
    gender: '',
    page: 0,
  } as SearchParamsDto;

  constructor(private readonly rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.rickMortyService
      .searchsAllCharactersByName(this.searchParams)
      .subscribe((characters) => {
        this.characters = characters;
        console.log(this.characters);
      });
  }

  onPageChange(event: any) {
    console.log(event);
    this.searchParams.page = event.page;
    this.searchParams.page++;

    this.getCharacters();
  }
}
