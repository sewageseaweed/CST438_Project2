package com.groupO.project2.repository.itemRepo;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//@Entity
//@Table(name = "item")


@Document("item")
public class Item {
	
	@Id
	  public String id; 

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

  public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getItemLink() {
		return itemLink;
	}

	public void setItemLink(String itemLink) {
		this.itemLink = itemLink;
	}

	public String getItemDesc() {
		return itemDesc;
	}

	public void setItemDesc(String itemDesc) {
		this.itemDesc = itemDesc;
	}

	public String getItemPic() {
		return itemPic;
	}

	public void setItemPic(String itemPic) {
		this.itemPic = itemPic;
	}


  @Override
  public String toString(){
    return String.format(
      "User[id=%s, userId=%s, itemLink=%s]",
      id, userId, itemLink);
  }

}
