package io.risk.riskgame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class RiskgameApplication {


    @RequestMapping("/welcome")
    public String welcome(){
        return "Welcome to our Risk game";
    }

    public static void main(String[] args) {
        SpringApplication.run(RiskgameApplication.class, args);
    }

}
