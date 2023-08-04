import {Component, OnInit} from '@angular/core';
import {Character} from '../interfaces/character';
import {InitiativeCharacter} from "../interfaces/initiative-character";
import {CharacterService} from "../services/character.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.css']
})
export class InitiativeComponent implements OnInit {

  initiativeCount= 1;
  initiativeActive = false;
  activePlayerNumber = 0;
  displayCharacters: InitiativeCharacter[] = [];
  initiativeCharacters: InitiativeCharacter[] = [];

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.getCharacters();

  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => {
        for (const character of characters) {
          let initiativeCharacter = this.transformCharacterToInitiative(character);
          this.initiativeCharacters.push(initiativeCharacter);
          this.displayCharacters.push(initiativeCharacter);
        }
      });
  }

  invokeInitiative(): void {
    this.initiativeCharacters.sort((c1: InitiativeCharacter, c2: InitiativeCharacter) => {
      if (c1.initiative < c2.initiative) return 1;
      if (c1.initiative > c2.initiative) return -1;
      return 0;
    });
    document.getElementById("initiativePreList")!.style.display = "none";
    document.getElementById("initiative")?.removeAttribute("hidden");
    //@ts-ignore
    document.getElementById(this.initiativeCharacters.at(this.activePlayerNumber).id).classList.replace('initiative-item', 'initiative-item-active');
    this.initiativeActive = true;
  }

  onFormSubmit(characterForm: NgForm) {
    for (const initiativeCharacter of this.initiativeCharacters) {
      if (initiativeCharacter.name === characterForm.value.name) {
        return alert(`Charaktername: ${initiativeCharacter.name} existiert bereits`)
      }
    }
    const initiativeCharacter: InitiativeCharacter = characterForm.value;
    initiativeCharacter.currentHP = initiativeCharacter.maxHP;
    this.initiativeCharacters.push(initiativeCharacter);
    this.displayCharacters.push(initiativeCharacter);
  }

  addOrRemove(initiativeCharacter: InitiativeCharacter) {
    let checkbox = <HTMLInputElement>document.getElementById(initiativeCharacter.name);
    if (checkbox.checked) {
      this.initiativeCharacters.push(initiativeCharacter);
      this.characterService.log(`added ${initiativeCharacter.name} to initiativeList`);
    } else {
      this.removeCharacter(initiativeCharacter)
    }
    console.log(this.initiativeCharacters.length);
  }

  removeCharacter(initiativeCharacter: InitiativeCharacter) {
    const index = this.initiativeCharacters.indexOf(initiativeCharacter);
    if (index !== -1) {
      this.initiativeCharacters.splice(index, 1);
    }
  }

  transformCharacterToInitiative(character: Character): InitiativeCharacter {
    return {
      "id": character.id,
      "name": character.name,
      "maxHP": character.maxHP,
      "currentHP": character.maxHP,
      "ac": character.ac,
      "initiative": 0
    };
  }

  updateInitiative(character: InitiativeCharacter, newValue: HTMLInputElement) {
    for (const characterElement of this.initiativeCharacters) {
      if (character.name === characterElement.name) {
        const index = this.initiativeCharacters.indexOf(characterElement);
        this.initiativeCharacters[index].initiative = Number(newValue.value);
      }
    }
  }

  moveCharacterForward() {
    // @ts-ignore
    document.getElementById(this.initiativeCharacters.at(this.activePlayerNumber).id).classList.replace('initiative-item-active', 'initiative-item');
    if (this.activePlayerNumber >= this.initiativeCharacters.length - 1) {
      this.activePlayerNumber = 0;
      this.initiativeCount++;
    }else {
      this.activePlayerNumber++;
    }
    //@ts-ignore
    document.getElementById(this.initiativeCharacters.at(this.activePlayerNumber).id).classList.replace('initiative-item', 'initiative-item-active');

  }

  moveCharacterBack() {
    if (this.initiativeCount === 1 && this.activePlayerNumber === 0) {
      console.log("Initiative kann nicht in den negativen Bereich!");
    }else{
    // @ts-ignore
    document.getElementById(this.initiativeCharacters.at(this.activePlayerNumber).id).classList.replace('initiative-item-active', 'initiative-item');
    if (this.activePlayerNumber <= 0){
      this.activePlayerNumber = this.initiativeCharacters.length - 1;
      this.initiativeCount--;
    }else{
      this.activePlayerNumber--;
    }
    //@ts-ignore
    document.getElementById(this.initiativeCharacters.at(this.activePlayerNumber).id).classList.replace('initiative-item', 'initiative-item-active');
    }
  }
}
