import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterComponent} from "./character/character.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CharacterDetailComponent} from "./character-detail/character-detail.component";
import {NewCharacterComponent} from "./new-character/new-character.component";
import {InitiativeComponent} from "./initiative/initiative.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'characters', component: CharacterComponent},
  {path: 'newCharacter', component: NewCharacterComponent},
  {path: 'detail/:id', component: CharacterDetailComponent},
  {path: 'initiative', component: InitiativeComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
