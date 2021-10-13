package com.groupO.project2;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;

import org.springframework.data.annotation.Id;

//@Entity
//@Table(name = "item")
public class Item {
  @Id
  public @GeneratedValue String id; 

  public String userId;
  public String itemLink;
  public String itemDesc;
  public String itemPic;

  public Item() {}

  public Item(String userId, String itemLink, String itemDesc, String itemPic){
    this.userId = userId;
    this.itemLink = itemLink;
    this.itemDesc = itemDesc;
    this.itemPic = itemPic;
  }

  @Override
  public String toString(){
    return String.format(
      "User[id=%s, userId=%s, itemLink=%s]",
      id, userId, itemLink);
  }

}
