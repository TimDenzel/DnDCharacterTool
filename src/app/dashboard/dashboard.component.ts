import { Component, OnInit } from '@angular/core';

import {Character} from "../interfaces/character";
import {CharacterService} from "../services/character.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters.slice(0,4));
  }
}
