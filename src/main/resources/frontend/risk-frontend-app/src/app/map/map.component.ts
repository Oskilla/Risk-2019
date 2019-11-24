import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private router: Router) {}
  nbOfPlayers = 2;
  player = '';
  item1 = '';
  item2 = '';
  item3 = '';
  item4 = '';
  item5 = '';
  item6 = '';
  reserve = 0;

  ngOnInit() {
    this.item1 = localStorage.getItem('item1');
    this.item2 = localStorage.getItem('item2');
    this.item3 = localStorage.getItem('item3');
    this.item4 = localStorage.getItem('item4');
    this.item5 = localStorage.getItem('item5');
    this.item6 = localStorage.getItem('item6');
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
    if (this.item3 === '') {
      return '#778899';
    } else {
      this.nbOfPlayers = this.nbOfPlayers + 1;
    }
  }
  getPlayer6Color() {
    if (this.item6 === '') {
      return '#778899';
    } else {
      this.nbOfPlayers = this.nbOfPlayers + 1;
    }
  }
  getPlayer4Color() {
    if (this.item4 === '') {
      return '#778899';
    } else {
      this.nbOfPlayers = this.nbOfPlayers + 1;
    }
  }

  getPlayer5Color() {
    if (this.item5 === '') {
      return '#778899';
    } else {
      this.nbOfPlayers = this.nbOfPlayers + 1;
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
      if (this.item3 === '') {
        return 'none';
      }
    }
    if (num === 4) {
      if (this.item4 === '') {
        return 'none';
      }
    }
    if (num === 5) {
      if (this.item5 === '') {
        return 'none';
      }
    }
    if (num === 6) {
      if (this.item6 === '') {
        return 'none';
      }
    }
  }
}
