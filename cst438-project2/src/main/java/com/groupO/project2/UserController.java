package com.groupO.project2;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}