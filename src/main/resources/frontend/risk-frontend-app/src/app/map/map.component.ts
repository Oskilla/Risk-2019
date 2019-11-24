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

  countries = [{name: 'indonesia', continent: 'oceania', owner: 'none', color:  'white', army: 0,
    neighbours: ['siam', 'western_australia', 'new_guinea']},
    {name: 'new_guinea', continent: 'oceania', owner: 'none', color:  'white', army: 0,
      neighbours: ['indonesia', 'eastern_australia', 'western_australia']},
    {name: 'eastern_australia', continent: 'oceania', owner: 'none', color: 'white', army: 0,
      neighbours: ['western_australia', 'new_guinea']},
    {name: 'western_australia', continent: 'oceania', owner: 'none', color: 'white', army: 0,
      neighbours: ['eastern_australia', 'new_guinea', 'indonesia']},
    {name: 'ural', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['ukraine', 'siberia', 'afghanistan', 'china']},
    {name: 'siberia', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['ural', 'mongolia', 'yakutsk', 'irkutsk', 'china']},
    {name: 'afghanistan', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['ukraine', 'ural', 'middle_east', 'china', 'india']},
    {name: 'irkutsk', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['yakutsk', 'siberia', 'kamchatka', 'mongolia']},
    {name: 'yakutsk', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['irkutsk', 'siberia', 'kamchatka']},
    {name: 'kamchatka', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['alaska', 'yakutsk', 'japan', 'irkutsk', 'mongolia']},
    {name: 'middle_east', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['ukraine', 'afghanistan', 'india', 'egypt', 'east_africa', 'southern_europe']},
    {name: 'india', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['middle_east', 'siam', 'afghanistan', 'china']},
    {name: 'siam', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['indonesia', 'india', 'china']},
    {name: 'china', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['ural', 'siberia', 'afghanistan', 'mongolia', 'siam', 'india']},
    {name: 'mongolia', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['irkutsk', 'siberia', 'kamchatka', 'china', 'japan']},
    {name: 'japan', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['kamchatka', 'mongolia']},
    {name: 'egypt', continent: 'africa', owner: 'none', color: 'white', army: 0, neighbours:
        ['middle_east', 'southern_europe', 'north_africa', 'east_africa']},
    {name: 'north_africa', continent: 'africa', owner: 'none', color: 'white', army: 0, neighbours:
        ['egypt', 'southern_europe', 'western_europe', 'east_africa', 'congo', 'brazil']},
    {name: 'east_africa', continent: 'africa', owner: 'none', color: 'white', army: 0, neighbours:
        ['middle_east', 'egypt', 'north_africa', 'congo', 'madagascar', 'south_africa']},
    {name: 'congo', continent: 'africa', owner: 'none', color: 'white', army: 0, neighbours:
        ['south_africa', 'north_africa', 'east_africa']},
    {name: 'south_africa', continent: 'africa', owner: 'none', color: 'white', army: 0, neighbours:
        ['congo', 'madagascar', 'east_africa']},
    {name: 'madagascar', continent: 'africa', owner: 'none', color: 'white', army: 0, neighbours:
        ['south_africa', 'east_africa']},
    {name: 'brazil', continent: 'South America', owner: 'none', color: 'white', army: 0, neighbours:
        ['peru', 'argentina', 'north_africa', 'venezuela']},
    {name: 'peru', continent: 'South America', owner: 'none', color: 'white', army: 0, neighbours:
        ['brazil', 'argentina', 'venezuela']},
    {name: 'argentina', continent: 'South America', owner: 'none', color: 'white', army: 0, neighbours:
        ['brazil', 'peru']},
    {name: 'venezuela', continent: 'South America', owner: 'none', color: 'white', army: 0, neighbours:
        ['brazil', 'peru', 'central_america']},
    {name: 'iceland', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['greenland', 'uk', 'scandinavia']},
    {name: 'scandinavia', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['iceland', 'uk', 'ukraine', 'northern_europe']},
    {name: 'northern_europe', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['ukraine', 'uk', 'scandinavia', 'southern_europe', 'western_europe']},
    {name: 'western_europe', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['north_africa', 'uk', 'northern_europe', 'southern_europe']},
    {name: 'southern_europe', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['north_africa', 'egypt', 'northern_europe', 'western_europe', 'middle_east', 'ukraine']},
    {name: 'uk', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['western_europe', 'iceland', 'northern_europe', 'scandinavia']},
    {name: 'ukraine', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['scandinavia', 'ural', 'northern_europe', 'southern_europe', 'afghanistan', 'middle_east']},
    {name: 'greenland', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['iceland', 'quebec', 'ontario', 'northwest_territory']},
    {name: 'central_america', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['venezuela', 'eastern_us', 'western_us']},
    {name: 'eastern_us', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['central_america', 'quebec', 'ontario', 'western_us']},
    {name: 'western_us', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['eastern_us', 'central_america', 'ontario', 'alberta']},
    {name: 'alaska', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['kamchatka', 'alberta', 'northwest_territory']},
    {name: 'alberta', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['alaska', 'western_us', 'ontario', 'northwest_territory']},
    {name: 'ontario', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['greenland', 'quebec', 'alberta', 'western_us', 'eastern_us', 'northwest_territory']},
    {name: 'quebec', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['greenland', 'eastern_us', 'ontario']},
    {name: 'northwest_territory', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['greenland', 'alaska', 'alberta', 'ontario']}
  ];
  continents = [
    {
      areas: ['indonesia', 'new_guinea', 'eastern_australia', 'western_australia'],
      name: 'oceania',
      bonus: 2
    },
    {
      areas: ['brazil', 'peru', 'venezuela', 'argentina'],
      name: 'South America',
      bonus: 2
    },
    {
      areas: ['egypt', 'north_africa', 'east_africa', 'congo', 'south_africa', 'madagascar'],
      name: 'africa',
      bonus: 3
    },
    {
      areas: ['iceland', 'uk', 'scandinavia', 'northern_europe', 'western_europe', 'ukraine', 'southern_europe'],
      name: 'europe',
      bonus: 5
    },
    {
      areas: ['central_america', 'eastern_us', 'western_us', 'quebec', 'ontario', 'alberta', 'northwest_territory', 'alaska',
        'greenland'],
      name: 'North America',
      bonus: 5
    },
    {
      areas: ['middle_east', 'afghanistan', 'ural', 'siberia', 'irkutsk', 'yakutsk', 'kamchatka', 'mongolia', 'japan', 'china', 'siam',
        'india'],
      name: 'asia',
      bonus: 7
    }];

  nbOfPlayers = 2;
  player = '';
  player1 = {name: '', color:  '', reserve: 0, mission: ''};
  player2 = {name: '', color:  '', reserve: 0, mission: ''};
  player3 = {name: '', color:  '', reserve: 0, mission: ''};
  player4 = {name: '', color:  '', reserve: 0, mission: ''};
  player5 = {name: '', color:  '', reserve: 0, mission: ''};
  player6 = {name: '', color:  '', reserve: 0, mission: ''};
  officialPlayers = [this.player1, this.player2];
  reserve = 0;
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
