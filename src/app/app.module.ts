import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from './services/in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {CharacterComponent} from './character/character.component';
import {CharacterSearchComponent} from './character-search/character-search.component';
import {MessagesComponent} from './messages/messages.component';


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
    CharacterSearchComponent
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
