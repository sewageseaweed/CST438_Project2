package com.groupO.project2.repository.itemRepo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

public interface ItemRepository extends MongoRepository<Item, String> {

  public Item findByUserId(String userId);
  //public Item findById(String id);
}