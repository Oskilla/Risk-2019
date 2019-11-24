import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  missions = ['Vous devez conquérir en totalité l\'Asie et l\'Afrique',
    'Vous devez conquérir en totalité l\'Asie et l\'Amérique du sud',
    'Vous devez conquérir en totalité l\'Amérique du Nord et l\'Océanie',
    'Vous devez conquérir 24 territoires aux choix',
    'Vous devez conquérir en totalité l\'Amérique du Nord et l\'Afrique',
    'Vous devez conquérir 18 territoires et occuper chacun d\'eux avec deux armées au moins',
    'Vous devez conquérir en totalité l\'Europe et l\'Amérique du sud plus un troisième continent au choix',
    'Vous devez conquérir en totalité l\'Europe et l\'Océanie plus un troisième continent au choix'];

  nbOfPlayers = 2;
  player = '';
  player1 = {name: '', color: '', reserve: 0, mission: ''};
  player2 = {name: '', color: '', reserve: 0, mission: ''};
  player3 = {name: '', color: '', reserve: 0, mission: ''};
  player4 = {name: '', color: '', reserve: 0, mission: ''};
  player5 = {name: '', color: '', reserve: 0, mission: ''};
  player6 = {name: '', color: '', reserve: 0, mission: ''};
  officialPlayers = [this.player1, this.player2];
  reserve = 0;
  constructor(private router: Router) {
    const shuffled = localStorage.getItem('shuffled');
    if (shuffled === 'true') {
      this.router.navigateByUrl('/players');
    }
    if (shuffled === 'false') {
      this.shufflemissions();
      localStorage.setItem('shuffled', 'true');
    }
  }
  shufflemissions() {
    let e = 0;
    let j = 0;
    let temp = '';
    for (e = this.missions.length - 1; e > 0; e--) {
      j = Math.floor(Math.random() * (e + 1));
      temp = this.missions[e];
      this.missions[e] = this.missions[j];
      this.missions[j] = temp;
      this.player1.mission = this.missions[0];
      this.player2.mission = this.missions[1];
      this.player3.mission = this.missions[2];
      this.player4.mission = this.missions[3];
      this.player5.mission = this.missions[4];
      this.player6.mission = this.missions[5];
    }
  }


  ngOnInit() {
    this.setNames();
    this.getPlayer3Color();
    this.getPlayer4Color();
    this.getPlayer5Color();
    this.getPlayer6Color();
    this.setReserves();
  }
  setNames() {
    this.player1.name = localStorage.getItem('item1');
    this.player2.name = localStorage.getItem('item2');
    this.player3.name = localStorage.getItem('item3');
    this.player4.name = localStorage.getItem('item4');
    this.player5.name = localStorage.getItem('item5');
    this.player6.name = localStorage.getItem('item6');
  }
  getPlayersColor() {
    if (this.player === 'item1') {
      return '#00008B';
    }
    if (this.player === 'item2') {
      return '#9932CC';
    }
    if (this.player === 'item3') {
      return '#F08080';
    }
    if (this.player === 'item4') {
      return '#3CB371';
    }
    if (this.player === 'item5') {
      return '#FF0000';
    }
    if (this.player === 'item6') {
      return '#CD853F';
    }
  }

  getPlayer3Color() {
    if (this.player3.name === '') {
      return '#778899';
    } else {
      this.nbOfPlayers = this.nbOfPlayers + 1;
      this.officialPlayers.push(this.player3);
    }
  }
  getPlayer6Color() {
    if (this.player6.name === '') {
      return '#778899';
    } else {
      this.nbOfPlayers = this.nbOfPlayers + 1;
      this.officialPlayers.push(this.player6);
    }
  }
  getPlayer4Color() {
    if (this.player4.name === '') {
      return '#778899';
    } else {
      this.nbOfPlayers = this.nbOfPlayers + 1;
      this.officialPlayers.push(this.player4);
    }
  }

  getPlayer5Color() {
    if (this.player5.name === '') {
      return '#778899';
    } else {
      this.nbOfPlayers = this.nbOfPlayers + 1;
      this.officialPlayers.push(this.player5);
    }
  }

  setReserves() {
    if (this.nbOfPlayers === 2) {
      this.reserve = 40;
    }
    if (this.nbOfPlayers === 3) {
      this.reserve = 35;
    }
    if (this.nbOfPlayers === 4) {
      this.reserve = 30;
    }
    if (this.nbOfPlayers === 5) {
      this.reserve = 25;
    }
    if (this.nbOfPlayers === 6) {
      this.reserve = 20;
    }
  }

  getDisplay(num: number) {
    if (num === 3) {
      if (this.player3.name === '') {
        return 'none';
      }
    }
    if (num === 4) {
      if (this.player4.name === '') {
        return 'none';
      }
    }
    if (num === 5) {
      if (this.player5.name === '') {
        return 'none';
      }
    }
    if (num === 6) {
      if (this.player6.name === '') {
        return 'none';
      }
    }
  }

  newGame() {
    // redirects to initializer component
    localStorage.setItem('shuffled', 'false');
    this.router.navigateByUrl('/players');
  }
}
