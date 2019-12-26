package io.risk.riskgame.entities;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Game {

    @Id
    private Long id;

    private String uuid;

    public Game() {
    }

    public Game(String uuid) {
        this.uuid = uuid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }
}
