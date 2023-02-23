import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {Character} from '../interfaces/character';
import {InitiativeCharacter} from "../interfaces/initiative-character";
import {CharacterService} from "../services/character.service";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.css']
})
export class InitiativeComponent implements OnInit {

  characters: Character[] = [];
  initiativeCharacters: InitiativeCharacter[] = [];

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }

  invokeInitiative(characterForm: NgForm): void {

  }

  addNewCharacter(name: string): void {
    this.characters.push()
  }

  addCharacterToList(characterForm: NgForm) {
    this.initiativeCharacters.push(characterForm.value);
    this.createNewElement(characterForm.value);
  }
  addOrRemove(character: Character) {

  }
  createNewElement(initiativeCharacter: InitiativeCharacter) {
    var li = document.createElement("li");
    const id = initiativeCharacter.name;
    var label = document.createElement("label");
    label.setAttribute("for", id);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = initiativeCharacter.name;
    checkbox.id = id;
    //checkbox.setAttribute("(change)", "addOrRemove(initiativeCharacter))";
    li.appendChild(label);
    li.appendChild(checkbox);

  }
}
