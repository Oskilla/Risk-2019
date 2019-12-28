package io.risk.riskgame.entities;

import javax.persistence.*;
import java.util.List;

@Entity(name="playerentity")
public class PlayerEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String color;
    private String reserve;
    private String mission;
    private String countries;
    private String uuid;
    private String winner;

    public PlayerEntity() {
    }

    public PlayerEntity(String name, String color, String reserve, String mission, String countries, String uuid, String winner) {
        this.name = name;
        this.color = color;
        this.reserve = reserve;
        this.mission = mission;
        this.countries = countries;
        this.uuid = uuid;
        this.winner = winner;
    }

    public String getWinner() {
        return winner;
    }

    public void setWinner(String winner) {
        this.winner = winner;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getReserve() {
        return reserve;
    }

    public void setReserve(String reserve) {
        this.reserve = reserve;
    }

    public String getMission() {
        return mission;
    }

    public void setMission(String mission) {
        this.mission = mission;
    }

    public String getCountries() {
        return countries;
    }

    public void setCountries(String countries) {
        this.countries = countries;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }
}
