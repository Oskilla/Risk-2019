import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from "./map/map.component";
import {InitializePlayersComponent} from "./initialize-players/initialize-players.component";


const routes: Routes = [
  {path: '', redirectTo: '/players', pathMatch: 'full'},
  {path: 'map', component: MapComponent},
  {path: 'players', component: InitializePlayersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
