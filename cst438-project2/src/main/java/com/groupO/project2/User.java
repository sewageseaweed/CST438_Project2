package com.groupO.project2;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//@Entity
//@Table(name = "user")
@Document("user")
public class User {
  @Id
  //@Column(name = "id")
  public String id; 
  
  //@Column(name = "username")
  public String username;
  
  //@Column(name = "password")
  public String password;
  
  //@Column(name = "email")
  public String email;

  public User() {}

  public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public User(String username, String password, String email){
    this.username = username;
    this.password = password;
    this.email = email;
  }

  @Override
  public String toString(){
    return String.format(
      "User[id=%s, username=%s, email=%s]",
      id, username, email);
  }

}
