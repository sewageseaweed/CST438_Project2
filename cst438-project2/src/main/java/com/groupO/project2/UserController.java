package com.groupO.project2;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.groupO.project2.repository.userRepo.User;

@RestController
@RestControllerAdvice

@RequestMapping(path = "/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/allUsers")
    public List<User> getUsers() {
        return ObjectMapperUtils.mapAll(userService.getUsers(), User.class);
    }

    @GetMapping(value = "/username/{username}")
    public User getUsersById(@PathVariable("username") String username) {
        return ObjectMapperUtils.map(userService.findByUserUsername(username), User.class);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<String> saveOrUpdateUser(@RequestBody User user) {
        userService.saveOrUpdateUser(ObjectMapperUtils.map(user, User.class));
        return new ResponseEntity("User added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{username}")
    public ResponseEntity<String> deleteUserByUsername(@PathVariable String username) {
        userService.deleteUser(userService.findByUserUsername(username).getId());
        return new ResponseEntity("User deleted successfully", HttpStatus.OK);
    }
    

}