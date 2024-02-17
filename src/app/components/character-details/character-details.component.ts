import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RickMortyCharacterDto } from 'src/app/models/rick-morty-character-dto';
import { RickMortyDetailDto } from 'src/app/models/rick-morty-detail-dto';
import { RickMortyEpisodeDto } from 'src/app/models/rick-morty-episode-dto';
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
  episodes: RickMortyEpisodeDto[] = [];
  pageSize = 8;
  currentPage = 0;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly rickMortyService: RickMortyService,
    public readonly router: Router
  ) {}

  ngOnInit(): void {
    this.characterId = this.activatedRoute.snapshot.params['id'];
    this.getCharacterDetails(this.characterId);
  }

  getCharacterDetails(characterId: number) {
    this.rickMortyService.findCharacterById(this.characterId).subscribe({
      next: (character) => {
        this.chracterDetails = character;
        this.getEpisodesDetails(character.episode);
      },
      error: (error) => {
        console.error('Error fetching character details:', error);
        this.characterDetailsNotFound = true;
      },
    });
  }

  getPaginatedEpisodes(): RickMortyEpisodeDto[] {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.episodes.slice(start, end);
  }

  getEpisodesDetails(episodeUrls: string[]) {
    this.rickMortyService.getEpisodesById(episodeUrls).subscribe({
      next: (episodes) => {
        console.log('Episodes:', episodes);
        if (episodes.length > 1) {
          this.episodes = episodes.reverse();
        } else {
          this.episodes = [episodes];
        }
      },
      error: (error) => {
        console.error('Error fetching episodes details:', error);
      },
    });
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
  }
  getStatusColor(status: string): string {
    if (status.toLowerCase() === 'alive') {
      return 'bg-green-500';
    } else if (status.toLowerCase() === 'dead') {
      return 'bg-red-500';
    } else if (status.toLowerCase() === 'unknown') {
      return 'bg-orange-500';
    } else {
      return '';
    }
  }
}
