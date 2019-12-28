package io.risk.riskgame.services;

import io.risk.riskgame.services.io_players.StorePlayersServiceInput;
import io.risk.riskgame.services.io_players.StorePlayersServiceOutput;

public interface StorePlayersService {

    StorePlayersServiceOutput savePlayersAsOneGame(StorePlayersServiceInput storePlayersServiceInput);

}
