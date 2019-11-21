import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initialize-players',
  templateUrl: './initialize-players.component.html',
  styleUrls: ['./initialize-players.component.css']
})
export class InitializePlayersComponent implements OnInit {
  item1 = '';
  item2 = '';
  item3 = '';
  item4 = '';
  item5 = '';
  item6 = '';
  newplayer = '';
  error = '';
  constructor() { }

  ngOnInit() {
  }

  addplayer() {
    // be sure to add it and not overwrite and old player
    // tslint:disable-next-line:max-line-length
    if ( this.item1 !== this.newplayer && this.item2 !== this.newplayer && this.item3 !== this.newplayer && this.item4 !== this.newplayer
      && this.item5 !== this.newplayer && this.item6 !== this.newplayer) {
      if (this.item1 === '') {
        this.item1 = this.newplayer;
      } else if (this.item2 === '') {
        this.item2 = this.newplayer;
      } else if (this.item3 === '') {
        this.item3 = this.newplayer;
      } else if (this.item4 === '') {
        this.item4 = this.newplayer;
      } else if (this.item5 === '') {
        this.item5 = this.newplayer;
      } else if (this.item6 === '') {
        this.item6 = this.newplayer;
      }
    }
  }

  startTheGame() {
    // check if there are at least two players
    if ( this.item1 !== '' && this.item2 !== '' ) {
      // then we can redirect to map component to start the game
    } else {
      this.error = 'You need at least two players to start';
    }
  }

  newPlayer(event: Event) {
    this.newplayer = ( event.target as HTMLInputElement).value;
    this.error = '';
  }
}
