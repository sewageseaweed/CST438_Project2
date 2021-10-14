package com.groupO.project2.repository.userRepo;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository extends MongoRepository<User, String> {

  public User findByEmail(String email);
  //public User findById(String id);
}


