package io.risk.riskgame.controllers;


import io.risk.riskgame.controllers.io_players.StorePlayersControllerInput;
import io.risk.riskgame.controllers.io_players.StorePlayersControllerOutput;
import io.risk.riskgame.services.StorePlayersService;
import io.risk.riskgame.services.io_players.StorePlayersServiceInput;
import io.risk.riskgame.services.io_players.StorePlayersServiceOutput;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.Assert.assertEquals;

@WebMvcTest( value = StorePlayersController.class)
public class StorePlayersControllerTest {

    private MockMvc mockMvc;

    @MockBean
    private StorePlayersService storePlayersService;

    StorePlayersServiceInput mockStoreServiceInput = new StorePlayersServiceInput(
            "player1",
            "red",
            "25",
            "You have to conquer Asia and Europe",
            "egypt, japan, india",
            "767dih-6dhf-90isd87",
            "false"
    );
    StorePlayersServiceOutput mockStoreServiceOutput = new StorePlayersServiceOutput("added");

    StorePlayersControllerInput mockStorePlayersControllerInput = new StorePlayersControllerInput(
            "player1",
            "red",
            "25",
            "You have to conquer Asia and Europe",
            "egypt, japan, india",
            "767dih-6dhf-90isd87",
            "false"
    );
    StorePlayersControllerOutput mockStorePlayersControllerOutput = new StorePlayersControllerOutput("added");

    @Test
    public StorePlayersControllerOutput storePlayers(StorePlayersControllerInput storePlayersControllerInput) throws Exception {

        return mockStorePlayersControllerOutput;
    }

}
