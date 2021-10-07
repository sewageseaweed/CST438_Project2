package com.groupO.project2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AccessingDataMongodbApplication implements CommandLineRunner {

  @Autowired
  private UserRepository repository;

  public static void main(String[] args){
    SpringApplication.run(AccessingDataMongodbApplication.class, args);
  }

  @Override
  public void run(String... args) throws Exception {
    repository.deleteAll();

    repository.save(new User("Clyde", "Password", "ewe@gmail.com"));

    System.out.println("Users found with finalALL()");
    System.out.println("------------");
    for(User user : repository.findAll()){
      System.out.println(user);
    }

    System.out.println();

    System.out.println("Users found with findById(1)");
    System.out.println("------------");
    System.out.println(repository.findById(1));

    System.out.println();

    System.out.println("Users found with finalALL()");
    System.out.println("------------");
    System.out.println(repository.findByEmail("ewe@gmail.com"));

    System.out.println();
  }
}
