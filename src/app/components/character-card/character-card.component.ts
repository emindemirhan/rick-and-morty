import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() gender: string = '';
  @Input() status: string = '';
  @Input() species: string = '';
  @Input() id: number = 0;

  constructor(public readonly router: Router) {}
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
