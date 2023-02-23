import {Component, OnInit} from '@angular/core';

import {Character} from '../interfaces/character';
import {CharacterService} from "../services/character.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }



  delete(character: Character): void {
    this.characters =  this.characters.filter(c => c !== character);
    this.characterService.deleteCharacter(character.id).subscribe();
  }
}


