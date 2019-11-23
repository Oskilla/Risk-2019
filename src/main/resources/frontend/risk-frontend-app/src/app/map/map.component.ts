import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private router: Router) {}

  player = '';
  item1 = '';
  item2 = '';
  item3 = '';
  item4 = '';
  item5 = '';
  item6 = '';
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
      // tslint:disable-next-line:no-unused-expression
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
    }
  }
  getPlayer6Color() {
    if (this.item6 === '') {
      return '#778899';
    }
  }
  getPlayer4Color() {
    if (this.item4 === '') {
      return '#778899';
    }
  }
  getPlayer5Color() {
    if (this.item5 === '') {
      return '#778899';
    }
  }
}
