package com.groupO.project2;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

  public User findByEmail(String email);
  public User findById(int id);
}
