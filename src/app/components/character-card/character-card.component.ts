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
}
