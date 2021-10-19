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
import com.groupO.project2.repository.itemRepo.ItemRepository;

import org.springframework.stereotype.Service;

@Service
public class ItemService {
    private final ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public Item findByItemLink(String link) {
        return itemRepository.findByItemLink(link);
    }

    public List<Item> getItems() {
        return itemRepository.findAll();
    }

}