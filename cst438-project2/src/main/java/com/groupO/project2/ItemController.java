package com.groupO.project2;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.groupO.project2.repository.itemRepo.Item;


@RestController
@RestControllerAdvice

@RequestMapping(path = "/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping(value = "/allItems")
    public List<Item> getUsers() {
        return ObjectMapperUtils.mapAll(itemService.getItems(), Item.class);
    }
}