package io.risk.riskgame.controllers;

import io.risk.riskgame.services.StorePlayersService;
import io.risk.riskgame.services.io_players.StorePlayersServiceInput;
import io.risk.riskgame.services.io_players.StorePlayersServiceOutput;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@WebMvcTest(value = StorePlayersController.class)
public class StorePlayersControllerTest {

    @MockBean
    StorePlayersService storePlayersService;

    private MockMvc mockMvc;

    @Test
    public void storePlayers () throws Exception {
       StorePlayersServiceInput mockStorePlayersServiceInput = new StorePlayersServiceInput(
                "playerA",
                "blue",
                "28",
                "You Should conquer Africa And Asia",
                "Egypt, Indonesia, Japan",
                "220vhde-5G9HJHhgd8",
                "false"
        );
       StorePlayersServiceOutput mockStorePlayersServiceOutput = new StorePlayersServiceOutput("added");
        Mockito.when( storePlayersService.savePlayersAsOneGame(
                mockStorePlayersServiceInput
        )).thenReturn(mockStorePlayersServiceOutput);

        String jsonRequestObject = "{\"name\":\"playerA\",\"color\":\"blue\",\"reserve\":\"28\",\"mission\":\"You should conquer Africa And Asia\",\"countries\":\"Egypt, Indonesia, Japan\",\"uuid\":\"220vhde-5G9HJHhgd8\",\"winner\":\"false\"}";
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .post("/players/store")
                .accept(MediaType.APPLICATION_JSON).content(jsonRequestObject)
                .contentType(MediaType.APPLICATION_JSON);
        String jsonResponseObject ="{\"added\":\"added\"}";
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();
        assert response.equals(jsonResponseObject);

    }

}
