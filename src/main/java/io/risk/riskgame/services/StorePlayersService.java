package io.risk.riskgame.services;

import io.risk.riskgame.services.io_players.StorePlayersServiceInput;

public interface StorePlayersService {

    void savePlayersAsOneGame(StorePlayersServiceInput storePlayersServiceInput);

}
