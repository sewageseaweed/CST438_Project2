package com.groupO.project2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.groupO.project2.repository.userRepo.User;
import com.groupO.project2.repository.userRepo.UserRepository;

@Component 
public class UserLoader implements CommandLineRunner { 

	private final UserRepository repository;

	@Autowired 
	public UserLoader(UserRepository repository) { 
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception { 
		repository.save(new User("roy", "123", "roy@gmail.com"));
	}
}