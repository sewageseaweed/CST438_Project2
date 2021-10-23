package com.groupO.project2.repository.itemRepo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

public interface ItemRepository extends MongoRepository<Item, String> {

  public Item findByItemLink(String link);
  public List<Item> findAllByUserId(String userId);
  public Item findByid(String id);
  //public Item findById(String id);
}