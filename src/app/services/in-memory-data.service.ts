import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Character} from "../interfaces/character";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const characters = [
      {id: 10, name: 'Sealamin'},
      {id: 11, name: 'Dunocratis'},
      {id: 12, name: 'Theadius'},
      {id: 13, name: 'Sir Tinly'},
      {id: 14, name: 'Brody'},
      {id: 15, name: 'Sascha'},
      {id: 16, name: 'Reinhardt'},
      {id: 17, name: 'Enoch'},
      {id: 18, name: 'Martin'},
      {id: 19, name: 'Ludwig'},
      {id: 20, name: 'Jan'},
    ];
    return {characters};
  }
  // Overrides the genId method to ensure that a character always has an id.
  // If the characters array is empty,
  // the method below returns the initial number (11).
  // of the heroes array is not empty, the method below returns the highest character id + 1.
  genId(characters:  Character[]): number {
    return characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 11;
  }
  constructor() { }
}
