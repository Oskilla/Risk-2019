import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  missions = ['Vous devez conquérir en totalité l\'Asie et l\'Afrique.',
    'Vous devez conquérir en totalité l\'Asie et l\'Amérique du sud.',
    'Vous devez conquérir en totalité l\'Amérique du Nord et l\'Océanie.',
    'Vous devez conquérir 24 territoires aux choix.',
    'Vous devez conquérir en totalité l\'Amérique du Nord et l\'Afrique.',
    'Vous devez conquérir 18 territoires et occuper chacun d\'eux avec deux armées au moins.',
    'Vous devez conquérir en totalité l\'Europe et l\'Amérique du sud plus un troisième continent au choix.',
    'Vous devez conquérir en totalité l\'Europe et l\'Océanie plus un troisième continent au choix.'];

  nbOfPlayers = 2;
  currentPlayer = '';
  player1 = {name: '', color:  '#00008B', reserve: 0, mission: '', countries: []};
  player2 = {name: '', color:  '#9932CC', reserve: 0, mission: '', countries: []};
  player3 = {name: '', color:  '#F08080', reserve: 0, mission: '', countries: []};
  player4 = {name: '', color:  '#3CB371', reserve: 0, mission: '', countries: []};
  player5 = {name: '', color:  '#FF0000', reserve: 0, mission: '', countries: []};
  player6 = {name: '', color:  '#CD853F', reserve: 0, mission: '', countries: []};
  officialPlayers = [this.player1, this.player2];
  missionIsAsked = 'none';
  missionShowed = '';
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
    if (this.currentPlayer === 'item1') {
      return this.player1.color;
    }
    if (this.currentPlayer === 'item2') {
      return this.player2.color;
    }
    if (this.currentPlayer === 'item3') {
      return this.player3.color;
    }
    if (this.currentPlayer === 'item4') {
      return this.player4.color;
    }
    if (this.currentPlayer === 'item5') {
      return this.player5.color;
    }
    if (this.currentPlayer === 'item6') {
      return this.player6.color;
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
  getPlayer(i) {
    if (i === 1) {
      return this.player1;
    } else if (i === 2) {
      return this.player2;
    } else if ( i === 3) {
      return this.player3;
    } else if (i === 4) {
      return this.player4;
    } else if (i === 5) {
      return this.player5;
    } else if (i === 6) {
      return this.player6;
    }
  }
  setReserves() {
    if (this.nbOfPlayers === 2) {
      for (let i = 0; i < 2; i++) {
        this.getPlayer(i + 1).reserve = 40;
      }
    }
    if (this.nbOfPlayers === 3) {
      for (let i = 0; i < 3; i++) {
        this.getPlayer(i + 1).reserve = 35;
      }
    }
    if (this.nbOfPlayers === 4) {
      for (let i = 0; i < 4; i++) {
        this.getPlayer(i + 1).reserve = 30;
      }
    }
    if (this.nbOfPlayers === 5) {
      for (let i = 0; i < 5; i++) {
        this.getPlayer(i + 1).reserve = 25;
      }
    }
    if (this.nbOfPlayers === 6) {
      for (let i = 0; i < 6; i++) {
        this.getPlayer(i + 1).reserve = 20;
      }
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

  showMission(num) {
    if (num === 1) {
      this.missionShowed = this.player1.mission;
      this.missionIsAsked = 'block';
    }
    if (num === 2) {
      this.missionShowed = this.player2.mission;
      this.missionIsAsked = 'block';
    }
    if (num === 3 && this.player3.name !== '') {
      this.missionShowed = this.player3.mission;
      this.missionIsAsked = 'block';
    }
    if (num === 4 && this.player4.name !== '') {
      this.missionShowed = this.player4.mission;
      this.missionIsAsked = 'block';
    }
    if (num === 5 && this.player5.name !== '') {
      this.missionShowed = this.player5.mission;
      this.missionIsAsked = 'block';
    }
    if (num === 6 && this.player6.name !== '') {
      this.missionShowed = this.player6.mission;
      this.missionIsAsked = 'block';
    }
  }

  closeMission() {
    this.missionIsAsked = 'none';
  }
}
