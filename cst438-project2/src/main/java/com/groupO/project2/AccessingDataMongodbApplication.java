package com.groupO.project2;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class AccessingDataMongodbApplication implements CommandLineRunner {

  @Autowired
  private UserRepository repository;
  //private ItemRepository itemRepo;

  public static void main(String[] args){
    SpringApplication.run(AccessingDataMongodbApplication.class, args);
  }

  @Override
  public void run(String... args) throws Exception {
    repository.deleteAll();

    repository.save(new User("Clyde", "Password", "ewe@gmail.com"));
    //repository.save(new User("2", "24", "ewe@gmail.com"));
    repository.save(new User("Roy", "Passwordy", "roy@gmail.com"));
    
    //itemRepo.save(new Item("sdfsafa2131", "amazon.com", "Bezos Cool", "jeffBezos.com"));

    System.out.println("Users found with finalALL()");
    System.out.println("------------");
    for(User user : repository.findAll()){
      System.out.println(user);
    }

    System.out.println();

    System.out.println("Users found with findById(1)");
    System.out.println("------------");
    //System.out.println(repository.findById("1"));

    System.out.println();

    System.out.println("Users found with findByEmail(ewe@gmail.com)");
    System.out.println("------------");
    System.out.println(repository.findByEmail("ewe@gmail.com"));

    System.out.println();
  }
}