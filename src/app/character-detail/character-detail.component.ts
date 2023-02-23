import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import {Character} from "../interfaces/character";
import {CharacterService} from "../services/character.service";
import {Router} from "@angular/router";


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
    private location: Location,
    private router: Router
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
    this.router.navigate(["/dashboard"]);
  }
  goBack(): void {
    this.location.back();
  }

  updateDetails(): void {
      document.getElementById("character-name")?.removeAttribute("disabled");
      document.getElementById("character-level")?.removeAttribute("disabled");
      document.getElementById("character-strength")?.removeAttribute("disabled");
      document.getElementById("character-dexterity")?.removeAttribute("disabled");
      document.getElementById("character-constitution")?.removeAttribute("disabled");
      document.getElementById("character-intelligence")?.removeAttribute("disabled");
      document.getElementById("character-wisdom")?.removeAttribute("disabled");
      document.getElementById("character-charisma")?.removeAttribute("disabled");
      document.getElementById("character-maxHP")?.removeAttribute("disabled");
      document.getElementById("character-ac")?.removeAttribute("disabled");
      document.getElementById("character-passivePerception")?.removeAttribute("disabled");
      document.getElementById("character-resistances")?.removeAttribute("disabled");
      document.getElementById("character-immunities")?.removeAttribute("disabled");
      document.getElementById("character-languages")?.removeAttribute("disabled");
      document.getElementById("character-information")?.removeAttribute("disabled");

      document.getElementById("update-button")?.removeAttribute("hidden");
      document.getElementById("disable-update")?.removeAttribute("hidden");
      document.getElementById("enable-update")?.setAttribute("hidden", "true");
      document.getElementById("go-back")?.setAttribute("hidden", "true");
      this.characterService.log("Enabled character update");
  }

  disableUpdate(): void {
    document.getElementById("character-name")?.setAttribute("disabled", "true");
    document.getElementById("character-level")?.setAttribute("disabled", "true");
    document.getElementById("character-strength")?.setAttribute("disabled", "true");
    document.getElementById("character-dexterity")?.setAttribute("disabled", "true");
    document.getElementById("character-constitution")?.setAttribute("disabled", "true");
    document.getElementById("character-intelligence")?.setAttribute("disabled", "true");
    document.getElementById("character-wisdom")?.setAttribute("disabled", "true");
    document.getElementById("character-charisma")?.setAttribute("disabled", "true");
    document.getElementById("character-maxHP")?.setAttribute("disabled", "true");
    document.getElementById("character-ac")?.setAttribute("disabled", "true");
    document.getElementById("character-passivePerception")?.setAttribute("disabled", "true");
    document.getElementById("character-resistances")?.setAttribute("disabled", "true");
    document.getElementById("character-immunities")?.setAttribute("disabled", "true");
    document.getElementById("character-languages")?.setAttribute("disabled", "true");
    document.getElementById("character-information")?.setAttribute("disabled", "true");

    document.getElementById("enable-update")?.removeAttribute("hidden");
    document.getElementById("go-back")?.removeAttribute("hidden");
    document.getElementById("update-button")?.setAttribute("hidden", "true");
    document.getElementById("disable-update")?.setAttribute("hidden", "true");
    this.characterService.log("Disabled character update");
  }
}
