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

import com.groupO.project2.repository.itemRepo.Item;


@RestController
@RestControllerAdvice

@RequestMapping(path = "/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping(value = "/allItems")
    public List<Item> getItems() {
        return ObjectMapperUtils.mapAll(itemService.getItems(), Item.class);
    }

    @GetMapping(value = "/itemLink/{itemLink}")
    public Item getItemsByItemLink(@PathVariable("itemLink") String itemLink) {
        return ObjectMapperUtils.map(itemService.findByItemLink(itemLink), Item.class);
    }

    @GetMapping(value = "/userId/{userId}")
    public List<Item> getItemsByUserId(@PathVariable("userId") String userId) {
        return ObjectMapperUtils.mapAll(itemService.findByUserId(userId), Item.class);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<?> saveOrUpdateItem(@RequestBody Item item) {
        itemService.saveOrUpdateItem(ObjectMapperUtils.map(item, Item.class));
        return new ResponseEntity("Item added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{itemLink}")
    public ResponseEntity<?> deleteItemByItemLink(@PathVariable String itemLink) {
        itemService.deleteItem(itemService.findByItemLink(itemLink).getId());
        return new ResponseEntity("Item deleted successfully", HttpStatus.OK);
    }

}