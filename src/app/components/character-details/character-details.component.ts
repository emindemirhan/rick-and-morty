import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyCharacterDto } from 'src/app/models/rick-morty-character-dto';
import { RickMortyDetailDto } from 'src/app/models/rick-morty-detail-dto';
import { RickMortyService } from 'src/app/services/rick-morty/rick-morty.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  characterId: number = 0;
  chracterDetails: RickMortyDetailDto = {} as RickMortyDetailDto;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly rickMortyService: RickMortyService
  ) {}

  ngOnInit(): void {
    this.characterId = this.activatedRoute.snapshot.params['id'];

    this.rickMortyService.findCharacterById(this.characterId).subscribe({
      next: (character) => {
        this.chracterDetails = character;
        console.log(this.chracterDetails);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
