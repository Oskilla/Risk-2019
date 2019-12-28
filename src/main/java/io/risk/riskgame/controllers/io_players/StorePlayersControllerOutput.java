package io.risk.riskgame.controllers.io_players;

public class StorePlayersControllerOutput {

    private String added;

    public StorePlayersControllerOutput() {
    }

    public StorePlayersControllerOutput(String added) {
        this.added = added;
    }

    public String getAdded() {
        return added;
    }

    public void setAdded(String added) {
        this.added = added;
    }
}
