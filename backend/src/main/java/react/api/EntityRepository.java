package react.api;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface EntityRepository extends MongoRepository<Entity, String> {

}
