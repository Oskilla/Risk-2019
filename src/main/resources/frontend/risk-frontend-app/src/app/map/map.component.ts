import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as uuid from 'uuid';
import {StoreGameInput} from "./StoreGameInput";
import {Game_playerService} from "../service/game_player.service";

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

  private theMissionsNotShuffled = ['Vous devez conquérir en totalité l\'Asie et l\'Afrique.',
    'Vous devez conquérir en totalité l\'Asie et l\'Amérique du sud.',
    'Vous devez conquérir en totalité l\'Amérique du Nord et l\'Océanie.',
    'Vous devez conquérir 24 territoires aux choix.',
    'Vous devez conquérir en totalité l\'Amérique du Nord et l\'Afrique.',
    'Vous devez conquérir 18 territoires et occuper chacun d\'eux avec deux armées au moins.',
    'Vous devez conquérir en totalité l\'Europe et l\'Amérique du sud plus un troisième continent au choix.',
    'Vous devez conquérir en totalité l\'Europe et l\'Océanie plus un troisième continent au choix.'];

  countries = [{name: 'indonesia', continent: 'oceania', owner: 'none', color:  'white', army: 0,
    neighbours: ['siam', 'western_australia', 'new_guinea'], clicked: 'false'},
    {name: 'new_guinea', continent: 'oceania', owner: 'none', color:  'white', army: 0,
      neighbours: ['indonesia', 'eastern_australia', 'western_australia'], clicked: 'false'},
    {name: 'eastern_australia', continent: 'oceania', owner: 'none', color: 'white', army: 0,
      neighbours: ['western_australia', 'new_guinea'], clicked: 'false'},
    {name: 'western_australia', continent: 'oceania', owner: 'none', color: 'white', army: 0,
      neighbours: ['eastern_australia', 'new_guinea', 'indonesia'], clicked: 'false'},
    {name: 'ural', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['ukraine', 'siberia', 'afghanistan', 'china'], clicked: 'false'},
    {name: 'siberia', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['ural', 'mongolia', 'yakutsk', 'irkutsk', 'china'], clicked: 'false'},
    {name: 'afghanistan', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['ukraine', 'ural', 'middle_east', 'china', 'india'], clicked: 'false'},
    {name: 'irkutsk', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['yakutsk', 'siberia', 'kamchatka', 'mongolia'], clicked: 'false'},
    {name: 'yakutsk', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['irkutsk', 'siberia', 'kamchatka'], clicked: 'false'},
    {name: 'kamchatka', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['alaska', 'yakutsk', 'japan', 'irkutsk', 'mongolia'], clicked: 'false'},
    {name: 'middle_east', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['ukraine', 'afghanistan', 'india', 'egypt', 'east_africa', 'southern_europe'], clicked: 'false'},
    {name: 'india', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['middle_east', 'siam', 'afghanistan', 'china'], clicked: 'false'},
    {name: 'siam', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['indonesia', 'india', 'china'], clicked: 'false'},
    {name: 'china', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['ural', 'siberia', 'afghanistan', 'mongolia', 'siam', 'india'], clicked: 'false'},
    {name: 'mongolia', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['irkutsk', 'siberia', 'kamchatka', 'china', 'japan'], clicked: 'false'},
    {name: 'japan', continent: 'asia', owner: 'none', color: 'white', army: 0, neighbours:
        ['kamchatka', 'mongolia'], clicked: 'false'},
    {name: 'egypt', continent: 'africa', owner: 'none', color: 'white', army: 0, neighbours:
        ['middle_east', 'southern_europe', 'north_africa', 'east_africa'], clicked: 'false'},
    {name: 'north_africa', continent: 'africa', owner: 'none', color: 'white', army: 0, neighbours:
        ['egypt', 'southern_europe', 'western_europe', 'east_africa', 'congo', 'brazil'], clicked: 'false'},
    {name: 'east_africa', continent: 'africa', owner: 'none', color: 'white', army: 0, neighbours:
        ['middle_east', 'egypt', 'north_africa', 'congo', 'madagascar', 'south_africa'], clicked: 'false'},
    {name: 'congo', continent: 'africa', owner: 'none', color: 'white', army: 0, neighbours:
        ['south_africa', 'north_africa', 'east_africa'], clicked: 'false'},
    {name: 'south_africa', continent: 'africa', owner: 'none', color: 'white', army: 0, neighbours:
        ['congo', 'madagascar', 'east_africa'], clicked: 'false'},
    {name: 'madagascar', continent: 'africa', owner: 'none', color: 'white', army: 0, neighbours:
        ['south_africa', 'east_africa'], clicked: 'false'},
    {name: 'brazil', continent: 'South America', owner: 'none', color: 'white', army: 0, neighbours:
        ['peru', 'argentina', 'north_africa', 'venezuela'], clicked: 'false'},
    {name: 'peru', continent: 'South America', owner: 'none', color: 'white', army: 0, neighbours:
        ['brazil', 'argentina', 'venezuela'], clicked: 'false'},
    {name: 'argentina', continent: 'South America', owner: 'none', color: 'white', army: 0, neighbours:
        ['brazil', 'peru'], clicked: 'false'},
    {name: 'venezuela', continent: 'South America', owner: 'none', color: 'white', army: 0, neighbours:
        ['brazil', 'peru', 'central_america'], clicked: 'false'},
    {name: 'iceland', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['greenland', 'uk', 'scandinavia'], clicked: 'false'},
    {name: 'scandinavia', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['iceland', 'uk', 'ukraine', 'northern_europe'], clicked: 'false'},
    {name: 'northern_europe', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['ukraine', 'uk', 'scandinavia', 'southern_europe', 'western_europe'], clicked: 'false'},
    {name: 'western_europe', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['north_africa', 'uk', 'northern_europe', 'southern_europe'], clicked: 'false'},
    {name: 'southern_europe', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['north_africa', 'egypt', 'northern_europe', 'western_europe', 'middle_east', 'ukraine'], clicked: 'false'},
    {name: 'uk', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['western_europe', 'iceland', 'northern_europe', 'scandinavia'], clicked: 'false'},
    {name: 'ukraine', continent: 'europe', owner: 'none', color: 'white', army: 0, neighbours:
        ['scandinavia', 'ural', 'northern_europe', 'southern_europe', 'afghanistan', 'middle_east'], clicked: 'false'},
    {name: 'greenland', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['iceland', 'quebec', 'ontario', 'northwest_territory'], clicked: 'false'},
    {name: 'central_america', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['venezuela', 'eastern_us', 'western_us'], clicked: 'false'},
    {name: 'eastern_us', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['central_america', 'quebec', 'ontario', 'western_us'], clicked: 'false'},
    {name: 'western_us', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['eastern_us', 'central_america', 'ontario', 'alberta'], clicked: 'false'},
    {name: 'alaska', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['kamchatka', 'alberta', 'northwest_territory'], clicked: 'false'},
    {name: 'alberta', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['alaska', 'western_us', 'ontario', 'northwest_territory'], clicked: 'false'},
    {name: 'ontario', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['greenland', 'quebec', 'alberta', 'western_us', 'eastern_us', 'northwest_territory'], clicked: 'false'},
    {name: 'quebec', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['greenland', 'eastern_us', 'ontario'], clicked: 'false'},
    {name: 'northwest_territory', continent: 'North America', owner: 'none', color: 'white', army: 0, neighbours:
        ['greenland', 'alaska', 'alberta', 'ontario'], clicked: 'false'}
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

  player1 = {name: '', color:  '#00008B', reserve: 0, mission: '', countries: [], uuid: '', winner: 'false'};
  player2 = {name: '', color:  '#9932CC', reserve: 0, mission: '', countries: [], uuid: '', winner: 'false'};
  player3 = {name: '', color:  '#F08080', reserve: 0, mission: '', countries: [], uuid: '', winner: 'false'};
  player4 = {name: '', color:  '#3CB371', reserve: 0, mission: '', countries: [], uuid: '', winner: 'false'};
  player5 = {name: '', color:  '#FF0000', reserve: 0, mission: '', countries: [], uuid: '', winner: 'false'};
  player6 = {name: '', color:  '#CD853F', reserve: 0, mission: '', countries: [], uuid: '', winner: 'false'};

  private nbOfPlayers = 2;
  private playersArray = [];
  private nbOfTurns = 0;
  private missionIsAsked = 'none';
  private missionShowed = '';
  private currentPlayer = this.player1.name;
  private currentOpponent = '';
  private currentPhase = '';
  private PhaseIsAsked = 'none';
  private OneMissionIsCompleted = 'none';
  private askedMove = 'none';
  private askedBattle = 'none';
  private cantBattle = 'none';
  private currentPlayerDice = 1;
  private opponentPlayerDice = 1;
  private numberNotAllowed = 'none';
  private maxMove = 0;
  private errorMove = 'none';
  private currentPlayerMaxMove = 0;
  paysAfortifier = this.countries[0];
  private paysQuiFortifie = '';
  private numberOfClicks = 0;
  private ownCountryClickedMove: boolean = false;
  private currentPlayerMaxDice: number = 0;
  private opponentPlayerMaxDice: number = 0;
  private battleWinner: string = '';
  private opponentDefender = this.countries[0];
  private playerAttacker = '';
  private gameUuid = '';
  storeGameInput: StoreGameInput = new StoreGameInput();


  constructor(private gamePlayerService: Game_playerService, private router: Router) {
    const shuffled = localStorage.getItem('shuffled');
    if (shuffled === 'true') {
      this.router.navigateByUrl('/players');
    }
    if (shuffled === 'false') {
      this.shuffle(this.missions);
      this.player1.mission = this.missions[0];
      this.player2.mission = this.missions[1];
      this.player3.mission = this.missions[2];
      this.player4.mission = this.missions[3];
      this.player5.mission = this.missions[4];
      this.player6.mission = this.missions[5];
      localStorage.setItem('shuffled', 'true');
    }
  }

  shuffle(array: any) {
    let j = 0;
    let temp = '';
    for (let e = array.length - 1; e > 0; e--) {
      j = Math.floor(Math.random() * (e + 1));
      temp = array[e];
      array[e] = array[j];
      array[j] = temp;
    }
  }

  ngOnInit() {
    this.gameUuid = uuid.v4();
    this.setNames();
    this.setNbOfPlayers();
    this.setPlayersArray();
    this.getPlayer3Color();
    this.getPlayer4Color();
    this.getPlayer5Color();
    this.getPlayer6Color();
    this.setReserves();
    this.phaseInitialisation0();
    this.setGameInitialSettings();
    this.addGameUUID();
  }

  addGameUUID() {
    this.player1.uuid = this.gameUuid;
    this.player2.uuid = this.gameUuid;
    this.player3.uuid = this.gameUuid;
    this.player4.uuid = this.gameUuid;
    this.player5.uuid = this.gameUuid;
    this.player6.uuid = this.gameUuid;
  }

  setNames() {
    this.player1.name = localStorage.getItem('item1');
    this.player2.name = localStorage.getItem('item2');
    this.player3.name = localStorage.getItem('item3');
    this.player4.name = localStorage.getItem('item4');
    this.player5.name = localStorage.getItem('item5');
    this.player6.name = localStorage.getItem('item6');
  }

  setNbOfPlayers() {
    if (this.player3.name === '') {
      this.nbOfPlayers = 2;
    } else if (this.player4.name === '') {
      this.nbOfPlayers = 3;
    } else if (this.player5.name === '') {
      this.nbOfPlayers = 4;
    } else if (this.player6.name === '') {
      this.nbOfPlayers = 5;
    } else {
      this.nbOfPlayers = 6;
    }
  }

  getPlayersColor() {
    if (this.currentPlayer === this.player1.name) {
      return this.player1.color;
    }
    if (this.currentPlayer ===  this.player2.name) {
      return this.player2.color;
    }
    if (this.currentPlayer ===  this.player3.name) {
      return this.player3.color;
    }
    if (this.currentPlayer ===  this.player4.name) {
      return this.player4.color;
    }
    if (this.currentPlayer ===  this.player5.name) {
      return this.player5.color;
    }
    if (this.currentPlayer ===  this.player6.name) {
      return this.player6.color;
    }
  }

  getPlayer3Color() {
    if (this.player3.name === '') {
      return '#778899';
    }
  }

  getPlayer6Color() {
    if (this.player6.name === '') {
      return '#778899';
    }
  }

  getPlayer4Color() {
    if (this.player4.name === '') {
      return '#778899';
    }
  }

  getPlayer5Color() {
    if (this.player5.name === '') {
      return '#778899';
    }
  }

  getPlayerByName(name: string) {
    if (name === this.player1.name) {
      return this.player1;
    } else if (name === this.player2.name) {
      return this.player2;
    } else if (name === this.player3.name) {
      return this.player3;
    } else if (name === this.player4.name) {
      return this.player4;
    } else if (name === this.player5.name) {
      return this.player5;
    } else if (name === this.player6.name) {
      return this.player6;
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
    //gets the game's status
    this.storeGameInput.name = this.player1.name.toString();
    this.storeGameInput.color = this.player1.color.toString();
    this.storeGameInput.countries = this.player1.countries.toString();
    this.storeGameInput.mission = this.player1.mission.toString();
    this.storeGameInput.reserve = this.player1.reserve.toString();
    this.storeGameInput.uuid = this.player1.uuid.toString();
    this.storeGameInput.winner = this.player1.winner.toString();
    //stores the game's status
    this.gamePlayerService.storeTheGame(this.storeGameInput).subscribe(response => this.onGameStoredSucceded(response),
      error => this.onGameStoredFailed(error));
    // redirects to initializer component
    localStorage.setItem('shuffled', 'false');
    this.router.navigateByUrl('/players');
  }

  private onGameStoredSucceded(response: any) {
    console.log('succeeded');
  }
  private onGameStoredFailed(error: any) {
    console.log('failed');
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

  unTourFortify() {
    if (this.currentPhase === 'Fortify Phase') {
      this.initialPhase();
    }
  }
  unTourBattle() {
    if (this.currentPhase === 'Battle Phase') {
      this.battlePhase();
    }
  }
  unTourMoving() {
    if (this.currentPhase === 'Moving Phase') {
      this.movingPhaseStep1();
    }
    this.checkIfMissionIsReached();
  }

  initialPhase() {
    // But: si le joueur veut ajouter des armées de sa reserve dans les countries qu'il possède.
    // 1. vérifier que le pays cliqué lui appartient et que le joueur a une reserve d'au moins un
    // 2. incrémenter l'army de ce pays.
    // 3. diminuer la reserve du joueur.
    // TODO :USE CARDS
    const nowPlayer = this.getPlayerByName(this.currentPlayer);
    this.currentPhase = 'Fortify Phase';
    const paysClique = this.getCountryClicked();
    let paysLuiAppartient = false;
    const thePlayersCountriesLength = nowPlayer.countries.length;
    const countriesLength = this.countries.length;
    for (let e = 0; e < thePlayersCountriesLength; e ++) {
      if (nowPlayer.countries.includes(paysClique)) {
        paysLuiAppartient = true;
      }
    }
    if (paysLuiAppartient && nowPlayer.reserve > 0 ) {
      for (let e = 0; e < countriesLength; e++) {
        if (this.countries[e].name === paysClique) {
          this.countries[e].army += 1;
        }
      }
      nowPlayer.reserve -= 1;
    }
  }

  getCountryClicked() {
    const countriesLength = this.countries.length;
    for (let i = 0; i < countriesLength; i++) {
      if (this.countries[i].clicked === 'true') {
        this.countries[i].clicked = 'false';
        return this.countries[i].name;
      }
    }
  }

  getCountClicked() {
    const countriesLength = this.countries.length;
    for (let i = 0; i < countriesLength; i++) {
      if (this.countries[i].clicked === 'true') {
        this.countries[i].clicked = 'false';
        return this.countries[i];
      }
    }
  }

  battlePhase() {
    // 1.choose own country.
    // 1.bis verifier qu'il a au moins 2 armées dans ce pays pour qu'il puisse attaquer
    // 2.choose opponent country
    // 3.vérifier que l'opponent country fait partie des countries adjacentes du pays choisi (cliqué en premier)
    if ( this.currentPhase === 'Battle Phase') {
      const nowPlayer = this.getPlayerByName(this.currentPlayer);
      if ( this.numberOfClicks === 0 ) {
        this.playerAttacker = this.getCountryClicked();
        if (typeof this.playerAttacker !== 'undefined' && this.getCountrysArmy(this.playerAttacker) > 1) {
          if (nowPlayer.countries.includes(this.playerAttacker)) {
            this.ownCountryClickedMove = true;
            this.numberOfClicks = 1;
            const armyAttacker = this.getCountrysArmy(this.playerAttacker);
            if ( armyAttacker > 3) {
              this.currentPlayerMaxDice = 3;
            } else if ( armyAttacker === 3 ) {
              this.currentPlayerMaxDice = 2;
            } else if ( armyAttacker === 2) {
              this.currentPlayerMaxDice = 1;
            }
          }
        } else  if (typeof this.playerAttacker !== 'undefined' && nowPlayer.countries.includes(this.playerAttacker)){
          this.cantBattle = 'block';
        }
      }
      else {
        if (this.ownCountryClickedMove) {
          this.opponentDefender = this.getCountClicked();
          if (typeof this.opponentDefender !== 'undefined') {
            if ( this.opponentDefender.army > 2) {
              this.opponentPlayerMaxDice = 2;
            }
            if ( this.opponentDefender.army <= 1) {
              this.opponentPlayerMaxDice = 1;
            }
            this.currentOpponent = this.opponentDefender.owner;
            const a = nowPlayer.countries.includes(this.opponentDefender.name.replace(/"/g, '\''));
            const b = this.opponentDefender.neighbours.includes(this.playerAttacker.replace(/"/g, '\''));
            if (!a && b) {
              this.askedBattle = 'block';
            }
          }
        }
        this.numberOfClicks = 0;
        this.ownCountryClickedMove = false;
      }
    }
  }


  jeuDeDes(nowPlayer, paysOpposantCliques, armeeAttaquant, armeedefenseur) {
    let winner = '';
    if (armeeAttaquant === 3 && armeedefenseur === 1) {
      winner = this.jeuDeDesA3D1(nowPlayer, paysOpposantCliques);
    } else if (armeeAttaquant === 2 && armeedefenseur === 1) {
      winner = this.jeuDeDesA2D1(nowPlayer, paysOpposantCliques);
    } else if (armeeAttaquant === 1 && armeedefenseur === 1) {
      winner = this.jeuDeDesA1D1(nowPlayer, paysOpposantCliques);
    } else if ( armeeAttaquant === 3 && armeedefenseur === 2) {
      winner = this.jeuDeDesA3D2(nowPlayer, paysOpposantCliques);
    } else if ( armeeAttaquant === 2 && armeedefenseur === 2) {
      winner = this.jeuDeDesA2D2(nowPlayer, paysOpposantCliques);
    } else if (armeeAttaquant === 1 && armeedefenseur === 2) {
      winner = this.jeuDeDesA1D2(nowPlayer, paysOpposantCliques);
    } else {
      this.numberNotAllowed = 'block';
      this.askedBattle = 'none';
      this.currentPhase = 'Moving Phase';
    }
    return winner;
  }

  jeuDeDesA3D2(nowPlayer, paysOpposantCliques) {
    let winner = '';
    const de1JoueurAttaquant = Math.floor((Math.random() * 6) + 1);
    const de2JoueurAttaquant = Math.floor((Math.random() * 6) + 1);
    const de3JoueurAttaquant = Math.floor((Math.random() * 6) + 1);
    const maxDesDesAttaquant = this.max(this.max(de1JoueurAttaquant, de2JoueurAttaquant), de3JoueurAttaquant);
    const de1JoueurDefenseur = Math.floor((Math.random() * 6) + 1);
    const de2JoueurDefenseur = Math.floor((Math.random() * 6) + 1);
    const maxDesDesDefenseur = this.max( de1JoueurDefenseur, de2JoueurDefenseur);
    if ( maxDesDesAttaquant > maxDesDesDefenseur) {
      winner = nowPlayer.name;
    } else if (maxDesDesDefenseur > maxDesDesAttaquant) {
      winner = paysOpposantCliques.owner;
    } else if (maxDesDesAttaquant === maxDesDesDefenseur) {
      let max2DesDesAttaquant = 0;
      let max2DesDesDefenseur = 0;
      if ( maxDesDesAttaquant === de1JoueurAttaquant ) {
        max2DesDesAttaquant = this.max( de2JoueurAttaquant, de3JoueurAttaquant);
      }
      if ( maxDesDesAttaquant === de2JoueurAttaquant ) {
        max2DesDesAttaquant = this.max( de1JoueurAttaquant, de3JoueurAttaquant);
      }
      if ( maxDesDesAttaquant === de3JoueurAttaquant ) {
        max2DesDesAttaquant = this.max( de1JoueurAttaquant, de2JoueurAttaquant);
      }
      if ( maxDesDesDefenseur === de1JoueurDefenseur ) {
        max2DesDesDefenseur = de2JoueurDefenseur;
      }
      if ( maxDesDesDefenseur === de2JoueurDefenseur ) {
        max2DesDesDefenseur = de1JoueurDefenseur;
      }
      if ( max2DesDesDefenseur > max2DesDesAttaquant ) {
        winner = paysOpposantCliques.owner;
      }
      if ( max2DesDesAttaquant > max2DesDesDefenseur ) {
        winner = nowPlayer.name;
      }
      if ( max2DesDesDefenseur === max2DesDesAttaquant) {
        winner = paysOpposantCliques.owner;
      }
    }
    return winner;
  }

  jeuDeDesA1D1(nowPlayer, paysOpposantCliques) {
    let winner = '';
    const de1JoueurAttaquant = Math.floor((Math.random() * 6) + 1);
    const de1JoueurDefenseur = Math.floor((Math.random() * 6) + 1);
    const maxDes = this.max(de1JoueurAttaquant, de1JoueurDefenseur);
    if ( maxDes === de1JoueurDefenseur) {
      winner = paysOpposantCliques.owner;
    } else if (maxDes === de1JoueurAttaquant) {
      winner = nowPlayer.name;
    }
    return winner;
  }

  jeuDeDesA1D2(nowPlayer, paysOpposantCliques) {
    let winner = '';
    const de1JoueurAttaquant = Math.floor((Math.random() * 6) + 1);
    const de1JoueurDefenseur = Math.floor((Math.random() * 6) + 1);
    const de2JoueurDefenseur = Math.floor((Math.random() * 6) + 1);
    const maxDesDesDefenseur = this.max( de1JoueurDefenseur, de2JoueurDefenseur);
    if ( de1JoueurAttaquant > maxDesDesDefenseur) {
      winner = nowPlayer.name;
    } else if (maxDesDesDefenseur >= de1JoueurAttaquant) {
      winner = paysOpposantCliques.owner;
    }
    return winner;
  }

  jeuDeDesA2D1(nowPlayer, paysOpposantCliques) {
    let winner = '';
    const de1JoueurAttaquant = Math.floor((Math.random() * 6) + 1);
    const de2JoueurAttaquant = Math.floor((Math.random() * 6) + 1);
    const maxDesDesAttaquant = this.max(de1JoueurAttaquant, de2JoueurAttaquant);
    const de1JoueurDefenseur = Math.floor((Math.random() * 6) + 1);
    if (maxDesDesAttaquant > de1JoueurDefenseur) {
      winner = nowPlayer.name;
    } else {
      winner = paysOpposantCliques.owner;
    }
    return winner;
  }

  jeuDeDesA2D2(nowPlayer, paysOpposantCliques) {
    let winner = '';
    const de1JoueurAttaquant = Math.floor((Math.random() * 6) + 1);
    const de2JoueurAttaquant = Math.floor((Math.random() * 6) + 1);
    const maxDesDesAttaquant = this.max(de1JoueurAttaquant, de2JoueurAttaquant);
    const de1JoueurDefenseur = Math.floor((Math.random() * 6) + 1);
    const de2JoueurDefenseur = Math.floor((Math.random() * 6) + 1);
    const maxDesDesDefenseur = this.max( de1JoueurDefenseur, de2JoueurDefenseur);
    if (maxDesDesAttaquant > maxDesDesDefenseur) {
      winner = nowPlayer.name;
    } else if (maxDesDesAttaquant < maxDesDesDefenseur) {
      winner = paysOpposantCliques.owner;
    } else if (maxDesDesDefenseur === maxDesDesAttaquant) {
      let max2DesDefenseur = 0;
      let max2DesAttaquant = 0;
      if (maxDesDesDefenseur === de1JoueurDefenseur) {
        max2DesDefenseur = de2JoueurDefenseur;
      }
      if (maxDesDesAttaquant === de1JoueurAttaquant) {
        max2DesAttaquant = de2JoueurAttaquant;
      }
      if (max2DesAttaquant === de2JoueurAttaquant) {
        max2DesAttaquant = de1JoueurAttaquant;
      }
      if (maxDesDesDefenseur === de2JoueurDefenseur) {
        max2DesDefenseur = de1JoueurDefenseur;
      }
      if (max2DesAttaquant > max2DesDefenseur) {
        winner = nowPlayer.name;
      } else if (max2DesAttaquant <= max2DesDefenseur) {
        winner = paysOpposantCliques.owner;
      }
    }
    return winner;
  }

  jeuDeDesA3D1(nowPlayer, paysOpposantCliques) {
    let winner = '';
    const de1JoueurAttaquant = Math.floor((Math.random() * 6) + 1);
    const de2JoueurAttaquant = Math.floor((Math.random() * 6) + 1);
    const de3JoueurAttaquant = Math.floor((Math.random() * 6) + 1);
    const maxDesDesAttaquant = this.max(this.max(de1JoueurAttaquant, de2JoueurAttaquant), de3JoueurAttaquant);
    const de1JoueurDefenseur = Math.floor((Math.random() * 6) + 1);
    if ( maxDesDesAttaquant > de1JoueurDefenseur) {
      winner = nowPlayer.name;
    } else {
      winner = paysOpposantCliques.owner;
    }
    return winner;
  }

  movingPhaseStep1() {
    const nowPlayer = this.getPlayerByName(this.currentPlayer);
    // 1. joueur reçoit un nombre de fantassin correspondant à la division par 3 de la somme de ses territoires
    const nbDeTerritoires = nowPlayer.countries.length;
    const armeeGagnee = Math.floor(nbDeTerritoires/3);
    nowPlayer.reserve += armeeGagnee;
    // 2. Le joueur reçoit des renfort bonus en fonction des continents qu’il contrôle complêtement
    // +2 s’il contrôle l’Océanie
    if( this.checkIfContinentIsConquered(0) === true) {
      nowPlayer.reserve += 2;
    }
    // +2 s’il contrôle l’Amérique du sud
    if (this.checkIfContinentIsConquered(1) === true) {
      nowPlayer.reserve += 2;
    }
    // +3 s’il contrôle l’Afrique
    if (this.checkIfContinentIsConquered(2) === true) {
      nowPlayer.reserve += 3;
    }
    // +5 s’il contrôle l’Europe
    if ( this.checkIfContinentIsConquered(3) === true) {
      nowPlayer.reserve +=5
    }
    // +5 s’il contrôle l’Amérique du nord
    if (this.checkIfContinentIsConquered(4) === true) {
      nowPlayer.reserve +=5;
    }
    // +7 s’il contrôle l’Asie
    if (this.checkIfContinentIsConquered(5) === true) {
      nowPlayer.reserve +=7;
    }
  }

  // distribuer les pays aux joueurs et mettre tous les text-reserve des pays à 1 et diminuer la réserve de tous les joueurs de 1.
  private phaseInitialisation0() {
    let a = 0;
    let i = 0;
    let e = 0;
    this.shuffle(this.countries);
    while ( i !== 1) {
      while ( e < this.nbOfPlayers ) {
        if ( a !== this.countries.length) {
          this.countries[a].owner = this.getPlayer(e + 1).name;
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
    for (let e = 0; e < p; e++) {
      if (this.countries[e].name === name) {
        return this.countries[e].color;
      }
    }
  }

  getCountryIndexByName (country: string) {
    for (let y = 0; y < this.countries.length; y ++ ) {
      if (this.countries[y].name === country) {
        return y;
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

  // It should be called after each attack
  checkIfMissionIsReached() {
    const nowPlayer = this.getPlayerByName(this.currentPlayer);
    const playersMission = nowPlayer.mission;
    if ( playersMission === this.theMissionsNotShuffled[0]) {
      if (this.checkMission0()) {
        this.OneMissionIsCompleted = 'block';
        nowPlayer.winner = 'true';
      }
    } else if (playersMission === this.theMissionsNotShuffled[1]) {
      if (this.checkMission1()) {
        this.OneMissionIsCompleted = 'block';
        nowPlayer.winner = 'true';
      }
    } else if (playersMission === this.theMissionsNotShuffled[2]) {
      if (this.checkMission2()) {
        this.OneMissionIsCompleted = 'block';
        nowPlayer.winner = 'true';
      }
    } else if (playersMission === this.theMissionsNotShuffled[3]) {
      if (this.checkMission3()) {
        this.OneMissionIsCompleted = 'block';
        nowPlayer.winner = 'true';
      }
    } else if (playersMission === this.theMissionsNotShuffled[4]) {
      if (this.checkMission4()) {
        this.OneMissionIsCompleted = 'block';
        nowPlayer.winner = 'true';
      }
    } else if (playersMission === this.theMissionsNotShuffled[5]) {
      if (this.checkMission5()) {
        this.OneMissionIsCompleted = 'block';
        nowPlayer.winner = 'true';
      }
    } else if (playersMission === this.theMissionsNotShuffled[6]) {
      if (this.checkMission6()) {
        this.OneMissionIsCompleted = 'block';
        nowPlayer.winner = 'true';
      }
    } else if (playersMission === this.theMissionsNotShuffled[7]) {
      if (this.checkMission7()) {
        this.OneMissionIsCompleted = 'block';
        nowPlayer.winner = 'true';
      }
    }
  }

  private  checkIfContinentIsConquered( o: number) {
    const nowPlayer = this.getPlayerByName(this.currentPlayer);
    const playerCountriesLength = nowPlayer.countries.length;
    let a = false;
    let z = 0;
    for (let r = 0; r < playerCountriesLength; r++) {
      if (this.continents[o].areas.includes( nowPlayer.countries[r])) {
        z += 1;
      }
    }
    if ( z === this.continents[o].areas.length) {
      a = true;
    }
    return a;
  }

  private checkMission0() {
    // Vous devez conquérir en totalité l'Asie et l'Afrique.
    const asiaIsConquered = this.checkIfContinentIsConquered(5);
    const africaIsConquered = this.checkIfContinentIsConquered(2);
    return asiaIsConquered && africaIsConquered;
  }

  private checkMission1() {
    // Vous devez conquérir en totalité l'Asie et l'Amérique du sud.
    const asiaIsConquered = this.checkIfContinentIsConquered(5);
    const southAmericaIsConquered = this.checkIfContinentIsConquered(1);
    return asiaIsConquered && southAmericaIsConquered;
  }

  private checkMission2() {
    // Vous devez conquérir en totalité l'Amérique du Nord et l'Océanie.
    const northAmericaIsConquered = this.checkIfContinentIsConquered(4);
    const oceanieIsConquered = this.checkIfContinentIsConquered(0);
    return northAmericaIsConquered && oceanieIsConquered;
  }

  private checkMission3() {
    const nowPlayer = this.getPlayerByName(this.currentPlayer);
    // Vous devez conquérir 24 territoires aux choix.
    if ( nowPlayer.countries.length >= 24) {
      return true;
    } else {
      return  false;
    }
  }

  private checkMission4() {
    // Vous devez conquérir en totalité l'Amérique du Nord et l'Afrique.
    const northAmericaIsConquered = this.checkIfContinentIsConquered(4);
    const africaIsConquered = this.checkIfContinentIsConquered(2);
    return northAmericaIsConquered && africaIsConquered;
  }

  private checkMission5() {
    const nowPlayer = this.getPlayerByName(this.currentPlayer);
    // Vous devez conquérir 18 territoires et occuper chacun d'eux avec deux armées au moins.
    let territoiresSontConquis = false;
    let territoireEtArmees = false;
    if ( nowPlayer.countries.length >= 18) {
      territoiresSontConquis = true;
    }
    for (let r = 0; r < nowPlayer.countries.length; r++) {
      if ( this.countries[r].army >= 2) {
        territoireEtArmees = true;
      }
    }
    return territoireEtArmees && territoiresSontConquis;
  }

  private checkMission6() {
    // Vous devez conquérir en totalité l'Europe et l'Amérique du sud plus un troisième continent au choix.
    const europeIsConquered = this.checkIfContinentIsConquered(3);
    const southAmericaIsConquered = this.checkIfContinentIsConquered(1);
    const troisemeContinent = this.checkIfContinentIsConquered(2);
    const quatriemeContinent = this.checkIfContinentIsConquered(0);
    const cinquiemeContinent = this.checkIfContinentIsConquered(4);
    const sixiemeContinent = this.checkIfContinentIsConquered(5);
    const thirdContinent = (troisemeContinent || quatriemeContinent || cinquiemeContinent || sixiemeContinent);
    return europeIsConquered && southAmericaIsConquered && thirdContinent;
  }

  private checkMission7() {
    // Vous devez conquérir en totalité l'Europe et l'Océanie plus un troisième continent au choix.
    const europeIsConquered = this.checkIfContinentIsConquered(3);
    const oceanieIsConquered = this.checkIfContinentIsConquered(0);
    const troisemeContinent = this.checkIfContinentIsConquered(1);
    const quatriemeContinent = this.checkIfContinentIsConquered(2);
    const cinquiemeContinent = this.checkIfContinentIsConquered(4);
    const sixiemeContinent = this.checkIfContinentIsConquered(5);
    const thirdContinent = (troisemeContinent || quatriemeContinent || cinquiemeContinent || sixiemeContinent);
    return europeIsConquered && oceanieIsConquered && thirdContinent;
  }

  displayDescribeCurrentPhase() {
    this.PhaseIsAsked = 'block';
  }

  getHowToPlayPhase() {
    if (this.currentPhase === 'Moving Phase') {
      return 'You can move an army from one of your countries to another one of your own by first clicking on the country you want ' +
        ' to move an army from then on the country you want to add an army to.\n';
    }
    if (this.currentPhase === 'Battle Phase') {
      return 'Click first on one of your countries that you want to battle with and an adjacent ' +
        'country you want to fight against in the map.';
    } else if ( this.currentPhase === 'Fortify Phase') {
      return 'You can add elements of your reserve to your countries\' armies by clicking on ' +
        'the country you want to fortify in the map.' +
        'Then you can you can use your cards by clicking on My Cards.';
    }
  }

  closePhaseDescription() {
    this.PhaseIsAsked = 'none';
  }

  setClickedCountry(countryName: string) {
    const countriesLength = this.countries.length;
    const countryindex = this.getCountryIndexByName(countryName) ;
    if (this.countries[countryindex] != null) {
      for (let i = 0; i < countriesLength; i++) {
        if (this.countries[i].name === countryName) {
          this.countries[i].clicked = 'true';
        }
      }
    }
    this.unTourFortify();
    this.unTourBattle();
    this.movingPhaseStep2();
  }

  close_mission_completed() {
    this.OneMissionIsCompleted = 'none';
    this.router.navigateByUrl('/players');
  }

  max(a: number, b: number) {
    if (a >= b) {
      return a;
    } else {
      return b;
    }
  }

  endTurn() {
    if (this.currentPhase === 'Fortify Phase') {
      this.currentPhase = 'Battle Phase';
      if (this.nbOfTurns < this.nbOfPlayers) {
        this.displayDescribeCurrentPhase();
      }
    } else if( this.currentPhase === 'Battle Phase') {
      this.currentPhase = 'Moving Phase';
      if (this.nbOfTurns < this.nbOfPlayers ) {
        this.displayDescribeCurrentPhase();
        this.nbOfTurns++;
      }
    } else if (this.currentPhase === 'Moving Phase') {
      this.playersArray.push(this.playersArray.shift());
      this.currentPlayer = this.playersArray[0].name;
      this.currentPhase = 'Fortify Phase';
      if (this.nbOfTurns < this.nbOfPlayers ) {
        this.displayDescribeCurrentPhase();
      }
    }
    this.unTourMoving();
  }

  private setGameInitialSettings() {
    this.currentPlayer = localStorage.getItem('item1');
    this.currentPhase = 'Fortify Phase';
    this.displayDescribeCurrentPhase();
  }

  closeMove() {
    if ( this.paysAfortifier.name !== "") {
      this.paysAfortifier.army += this.maxMove;
      this.countries[this.getCountryIndexByName(this.paysQuiFortifie)].army -= this.maxMove;
    }
    this.askedMove = 'none';
    this.errorMove = 'none';
    this.maxMove = 0;
  }

  closeDice() {
    const nowPlayer = this.getPlayerByName(this.currentPlayer);
    this.battleWinner = this.jeuDeDes(nowPlayer, this.opponentDefender, this.currentPlayerDice, this.opponentPlayerDice);
    if( this.battleWinner === nowPlayer.name) {
      if ( this.currentPlayerDice >= this.opponentDefender.army ) {
        const counrtyIndex = this.getCountryIndexByName(this.playerAttacker);
        this.countries[counrtyIndex].army -= this.currentPlayerDice;
        this.opponentDefender.army = this.currentPlayerDice;
        nowPlayer.countries.push(this.opponentDefender.name);
        this.opponentDefender.color = nowPlayer.color;
        for (let y = 1; y <= this.nbOfPlayers; y++) {
          if (this.opponentDefender.owner === this.getPlayer(y).name) {
            const countryIndex = this.getPlayer(y).countries.indexOf(
              this.opponentDefender.name
            );
            this.getPlayer(y).countries.splice(countryIndex, 1);
          }
        }
      } else {
        this.opponentDefender.army -= this.opponentPlayerDice;
      }
    } else {
      // the defender wins.
      const counrtyIndex = this.getCountryIndexByName(this.playerAttacker);
      this.countries[counrtyIndex].army -= this.currentPlayerDice;
      console.log('defender wins');
    }
    this.askedBattle = 'none';
    this.currentPlayerDice = 1;
    this.opponentPlayerDice = 1;
  }

  closeException() {
    this.cantBattle = 'none';
  }

  private setPlayersArray() {
    for (let y = 0; y<this.nbOfPlayers; y++) {
      this.playersArray.push(this.getPlayer(y+1));
    }
  }

  removeMove() {
    this.errorMove = 'none';
    if (this.maxMove > 0) {
      this.maxMove -= 1;
    }
  }

  addMove() {
    this.errorMove = 'none';
    if ( this.maxMove < this.currentPlayerMaxMove) {
      this.maxMove += 1;
    } else {
      this.errorMove = 'block';
    }
  }

  movingPhaseStep2() {
    if( this.currentPhase === 'Moving Phase') {
      const nowPlayer = this.getPlayerByName(this.currentPlayer);
      if( this.numberOfClicks === 0) {
        this.paysQuiFortifie = this.getCountryClicked();
        if (typeof this.paysQuiFortifie !== 'undefined' &&  this.getCountrysArmy(this.paysQuiFortifie) > 1) {
          if (nowPlayer.countries.includes(this.paysQuiFortifie)) {
            this.ownCountryClickedMove = true;
            this.currentPlayerMaxMove = this.getCountrysArmy(this.paysQuiFortifie) - 1;
            this.numberOfClicks = 1;
          }
        }
      }
      else {
        if(this.ownCountryClickedMove) {
          this.paysAfortifier = this.getCountClicked();
          if (typeof this.paysAfortifier !== 'undefined') {
            const a = nowPlayer.countries.includes(this.paysAfortifier.name.replace(/"/g, '\''));
            const b = this.paysAfortifier.neighbours.includes(this.paysQuiFortifie.replace(/"/g, '\''));
            if (a && b) {
              this.askedMove = 'block';
            } else {
              this.paysAfortifier = this.countries[0];
            }
          }
        }
        this.numberOfClicks = 0;
        this.ownCountryClickedMove = false;
      }
    }
  }

  removeDiceCurrent() {
    if ( this.currentPlayerDice > 1 ) {
      this.currentPlayerDice -= 1;
    }
  }

  addDiceCurrent() {
    if ( this.currentPlayerDice < this.currentPlayerMaxDice ) {
      this.currentPlayerDice += 1;
    }
  }

  removeDiceOpponent() {
    if ( this.opponentPlayerDice > 1 ) {
      this.opponentPlayerDice -= 1;
    }
  }

  addDiceOpponent() {
    if ( this.opponentPlayerDice < this.opponentPlayerMaxDice ) {
      this.opponentPlayerDice += 1;
    }
  }


}
// TODO block all clicks if mission is displayed + completed mission is displayed + phase is displayed + exception is displayed + move army choice is displayed
