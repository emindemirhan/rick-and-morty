import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterCardListComponent } from './components/character-card-list/character-card-list.component';
import { RickMortyService } from './services/rick-morty/rick-morty.service';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    CharacterCardListComponent,
    CharactersComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    PaginatorModule,
    ButtonModule,
    CardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [RickMortyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
