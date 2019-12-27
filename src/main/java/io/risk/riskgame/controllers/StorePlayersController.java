package io.risk.riskgame.controllers;


import io.risk.riskgame.controllers.io_players.StorePlayersControllerInput;
import io.risk.riskgame.controllers.io_players.StorePlayersControllerOutput;
import io.risk.riskgame.services.StorePlayersService;
import io.risk.riskgame.services.io_players.StorePlayersServiceInput;
import io.risk.riskgame.services.io_players.StorePlayersServiceOutput;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/players")
public class StorePlayersController {

    private StorePlayersService storePlayersService;

    public StorePlayersController(StorePlayersService storePlayersService) {
        this.storePlayersService = storePlayersService;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/store"
    )
    public @ResponseBody StorePlayersControllerOutput storePlayers(
            @RequestBody StorePlayersControllerInput storePlayersControllerInput)
    {
        StorePlayersControllerOutput storePlayersControllerOutput = new StorePlayersControllerOutput();
        StorePlayersServiceInput storePlayersServiceInput = new StorePlayersServiceInput(
          storePlayersControllerInput.getName(),
          storePlayersControllerInput.getColor(),
          storePlayersControllerInput.getReserve(),
          storePlayersControllerInput.getMission(),
          storePlayersControllerInput.getCountries(),
          storePlayersControllerInput.getUuid()
        );
        this.storePlayersService.savePlayersAsOneGame(storePlayersServiceInput);
        return storePlayersControllerOutput;
    }

}
