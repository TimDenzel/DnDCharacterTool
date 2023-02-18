import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterComponent} from "./character/character.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CharacterDetailComponent} from "./character-detail/character-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'characters', component: CharacterComponent},
  {path: 'detail/:id', component: CharacterDetailComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
