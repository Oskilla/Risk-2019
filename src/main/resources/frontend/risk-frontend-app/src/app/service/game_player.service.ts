import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StoreGameInput} from "../map/StoreGameInput";

@Injectable()
export class Game_playerService {

  constructor(private httpClient: HttpClient) { }

  private storeGame = "/players/store";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  storeTheGame(body: StoreGameInput){
    return this.httpClient.post(this.storeGame, body, this.httpOptions);
  }

}
