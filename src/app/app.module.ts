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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DateFormatPipe } from './date-format.pipe';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    CharacterCardListComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    DateFormatPipe,
  ],
  imports: [
    PaginatorModule,
    ButtonModule,
    CardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    CardModule,
  ],
  providers: [RickMortyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
