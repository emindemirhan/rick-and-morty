import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  characterDetailsNotFound: boolean = false;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly rickMortyService: RickMortyService,
    public readonly router: Router
  ) {}

  ngOnInit(): void {
    this.characterId = this.activatedRoute.snapshot.params['id'];

    this.rickMortyService.findCharacterById(this.characterId).subscribe({
      next: (character) => {
        this.chracterDetails = character;
        this.characterDetailsNotFound = false;
        console.log(this.chracterDetails);
      },
      error: (error) => {
        console.log(error);
        this.characterDetailsNotFound = true;
      },
    });
  }

  getStatusColor(status: string): string {
    if (status.toLowerCase() === 'alive') {
      return 'bg-green-500';
    } else if (status.toLowerCase() === 'dead') {
      return 'bg-red-500';
    } else if (status.toLowerCase() === 'unknown') {
      return 'bg-orange-500'; // Set the appropriate class for orange
    } else {
      return '';
    }
  }
}
