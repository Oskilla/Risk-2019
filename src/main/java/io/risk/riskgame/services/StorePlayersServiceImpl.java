package io.risk.riskgame.services;

import io.risk.riskgame.entities.GameEntity;
import io.risk.riskgame.entities.PlayerEntity;
import io.risk.riskgame.repositories.GameRepository;
import io.risk.riskgame.repositories.PlayerRepository;
import io.risk.riskgame.services.io_players.StorePlayersServiceInput;
import io.risk.riskgame.services.io_players.StorePlayersServiceOutput;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StorePlayersServiceImpl implements StorePlayersService {

    private final PlayerRepository playerRepository;
    private final GameRepository gameRepository;

    public StorePlayersServiceImpl(PlayerRepository playerRepository, GameRepository gameRepository) {
        this.playerRepository = playerRepository;
        this.gameRepository = gameRepository;
    }


    @Override
    public StorePlayersServiceOutput savePlayersAsOneGame(StorePlayersServiceInput storePlayersServiceInput) {
        int y = 0;
        StorePlayersServiceOutput storePlayersServiceOutput = new StorePlayersServiceOutput();
        PlayerEntity playerEntity = new PlayerEntity(
                storePlayersServiceInput.getName(),
                storePlayersServiceInput.getColor(),
                storePlayersServiceInput.getReserve(),
                storePlayersServiceInput.getMission(),
                storePlayersServiceInput.getCountries(),
                storePlayersServiceInput.getUuid(),
                storePlayersServiceInput.getWinner()
        );
        GameEntity gameEntity = new GameEntity(storePlayersServiceInput.getUuid());
        this.playerRepository.save(playerEntity);
        List<GameEntity> gameEntityList = this.gameRepository.findByUuid(
                storePlayersServiceInput.getUuid()
        );
        if( gameEntityList == null || gameEntityList.size() == 0 ) {
            this.gameRepository.saveAndFlush(gameEntity);
        }
        storePlayersServiceOutput.setAdded("added");
        return storePlayersServiceOutput;
    }

}
