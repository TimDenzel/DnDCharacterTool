import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import {Character} from "../interfaces/character";
import {CharacterService} from "../services/character.service";


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character?: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.characterService.getCharacter(id)
      .subscribe(character => this.character = character);
  }

  save(): void {
    if(this.character) {
      this.characterService.updateCharacter(this.character)
        .subscribe(() => this.goBack());
    }
  }
  goBack(): void {
    this.location.back();
  }
}
