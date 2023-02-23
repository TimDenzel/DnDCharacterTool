import {Component} from '@angular/core';
import {Character} from "../interfaces/character";
import {CharacterService} from "../services/character.service";
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent {

  constructor(private characterService: CharacterService, private router: Router) {
  }

  onFormSubmit(characterForm: NgForm) {
    console.log(characterForm.value);
    console.log("Name: " + characterForm.controls['name'].value);
    console.log("Form Valid: " + characterForm.valid);
    console.log("Form Submitted: " + characterForm.submitted);
    this.add(characterForm.value);
    new Promise( resolve => setTimeout(resolve, 3000));
    this.router.navigate([`detail/${characterForm.controls['id'].value}`]);
  }

  add(newCharacter: Character): void {
    let name = newCharacter.name.trim()
    if (!name) {
      return;
    }
    this.characterService.addCharacter(newCharacter).subscribe()

  }

}
