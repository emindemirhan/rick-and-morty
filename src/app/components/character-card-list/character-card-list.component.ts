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
  genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Unknown', value: 'unknown' },
    { label: 'Genderless', value: 'Genderless' },
  ];

  statusOptions = [
    { label: 'Alive', value: 'Alive' },
    { label: 'Dead', value: 'Dead' },
    { label: 'Unknown', value: 'unknown' },
  ];
  @ViewChild('paginator') paginator: Paginator | undefined;
  charactersFound: boolean = true;
  isSearchButtonDisabled: boolean = true;
  characters: RickMortyCharacterListDto = {} as RickMortyCharacterListDto;

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
      .subscribe({
        next: (characters) => {
          this.characters = characters;
          this.charactersFound = true;
        },
        error: (error) => {
          console.error('Error fetching characters:', error);
          this.charactersFound = false;
        },
      });
  }

  onPageChange(event: any) {
    this.searchParams.page = event.page;
    this.searchParams.page++;

    this.getCharacters();
  }
  search() {
    this.searchParams.page = 0;
    if (this.paginator) {
      this.paginator.changePage(0);
    }
    this.getCharacters();
  }

  clearFilters() {
    this.searchParams = {
      name: '',
      status: '',
      type: '',
      gender: '',
      page: 0,
    } as SearchParamsDto;

    this.getCharacters();
    if (this.paginator) {
      this.paginator.changePage(0);
    }
    this.checkSearchButtonState();
  }

  checkSearchButtonState() {
    return (this.isSearchButtonDisabled =
      !this.searchParams.name &&
      !this.searchParams.gender &&
      !this.searchParams.status &&
      !this.searchParams.type);
  }
}
