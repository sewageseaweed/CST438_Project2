package com.groupO.project2;
import org.springframework.data.annotation.Id;

public class User {

  @Id
  public int id;

  public String userName;
  public String password;
  public String email;

  public User() {}

  public User(String userName, String password, String email){
    this.userName = userName;
    this.password = password;
    this.email = email;
  }

  @Override
  public String toString(){
    return String.format(
      "User[id=%s, username=%s, email=%s]",
      id, firstName, lastName);
  }

}
