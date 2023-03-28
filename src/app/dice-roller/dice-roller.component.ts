import { Component } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent {
  result : Number = 0;

  calculate(count: HTMLInputElement, type: HTMLSelectElement): void {
    let result = 0;
    for (let i = 0; i < Number(count.value); i++) {
      let test = 1 + Math.floor(Math.random() * Number(type.value));
      console.log(test);
      result += test;
    }
   this.result = result;
  }

}
