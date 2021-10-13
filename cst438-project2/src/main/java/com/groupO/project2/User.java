package com.groupO.project2;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;

import org.springframework.data.annotation.Id;

//@Entity
//@Table(name = "user")
public class User {
  @Id
  //@Column(name = "id")
  public @GeneratedValue String id; 
  
  //@Column(name = "username")
  public String username;
  
  //@Column(name = "password")
  public String password;
  
  //@Column(name = "email")
  public String email;

  public User() {}

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
