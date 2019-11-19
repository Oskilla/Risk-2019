import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MapComponent} from "./map/map.component";
import {InitializePlayersComponent} from "./initialize-players/initialize-players.component";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InitializePlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
