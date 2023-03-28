import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {CharacterComponent} from './character/character.component';
import {CharacterSearchComponent} from './character-search/character-search.component';
import {MessagesComponent} from './messages/messages.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { InitiativeComponent } from './initiative/initiative.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    CharacterComponent,
    CharacterDetailComponent,
    MessagesComponent,
    CharacterSearchComponent,
    NewCharacterComponent,
    InitiativeComponent,
    DiceRollerComponent
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
