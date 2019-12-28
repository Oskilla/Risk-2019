import { Component } from '@angular/core';
import * as SockJS from 'sockjs-client';
import {Game_playerService} from "./service/game_player.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Game_playerService]
})
export class AppComponent {
  title = 'risk-frontend-app';
}


