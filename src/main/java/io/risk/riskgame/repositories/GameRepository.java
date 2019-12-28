package io.risk.riskgame.repositories;

import io.risk.riskgame.entities.GameEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends CrudRepository<GameEntity, Long> {

    List<GameEntity> findByUuid( String uuid);

}
