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
    },
    {
      areas: ['brazil', 'peru', 'venezuela', 'argentina'],
      name: 'South America',
    },
    {
      areas: ['egypt', 'north_africa', 'east_africa', 'congo', 'south_africa', 'madagascar'],
      name: 'africa',
    },
    {
      areas: ['iceland', 'uk', 'scandinavia', 'northern_europe', 'western_europe', 'ukraine', 'southern_europe'],
      name: 'europe',
    },
    {
      areas: ['central_america', 'eastern_us', 'western_us', 'quebec', 'ontario', 'alberta', 'northwest_territory', 'alaska',
        'greenland'],
      name: 'North America',
    },
    {
      areas: ['middle_east', 'afghanistan', 'ural', 'siberia', 'irkutsk', 'yakutsk', 'kamchatka', 'mongolia', 'japan', 'china', 'siam',
        'india'],
      name: 'asia',
    }];

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
    this.phaseInitialisation0();
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

  unTour() {
    this.initialPhase();
    this.battlePhase();
    this.fortifyPhase();
  }

  initialPhase() {
    // si le joueur veut ajouter des armées de sa reserve dans les countries qu'il possède.
    // 1. vérifier que le pays cliqué lui appartient
    // 2. incrémenter l'army de ce pays.
    // 3. diminuer la reserve du joueur.
    for ( let e = 0; e < this.nbOfPlayers; e++) {
    }
  }
  battlePhase() {
    // 1.choose own country.
    // 2.choose opponent country
    // 3.vérifier que l'opponent country fait partie des countries adjacentes du pays choisi (cliqué en premier)
    // 4.jeu de dés (renvoie le vainqueur)
    // 5.changement dans les données du vainqueur
  }
  fortifyPhase() {}

  // distribuer les pays aux joueurs et mettre tous les text-reserve des pays à 1 et diminuer la réserve de tous les joueurs de 1.
  private phaseInitialisation0() {
    let a = 0;
    let i = 0;
    let e = 0;
    // shuffle countries
    while ( i !== 1) {
      while ( e < this.nbOfPlayers ) {
        if ( a !== this.countries.length) {
          this.countries[a].owner = this.getPlayer(e + 1) + '';
          this.getPlayer(e + 1).countries.push(this.countries[a].name);
          this.countries[a].army += 1;
          this.countries[a].color = this.getPlayer(e + 1).color;
          this.getPlayer(e + 1).reserve = this.getPlayer(e + 1).reserve - 1;
          e += 1;
          a = a + 1;
          if (a === this.countries.length) {
            i = 1;
            break;
          }
        }
      }
      if (a === this.countries.length) {
        i = 1;
        break;
      } else {
        e = 0;
      }
    }
  }

  setCountryColor(name: string) {
    const p = this.countries.length;
    for ( let e = 0; e < p; e++) {
      if (this.countries[e].name === name) {
        return this.countries[e].color;
      }
    }
  }

  getCountrysArmy(country: string) {
    const nbOfCountries = this.countries.length;
    for ( let r = 0; r < nbOfCountries; r++ ) {
      if ( this.countries[r].name === country) {
        return this.countries[r].army;
      }
    }
  }
}
