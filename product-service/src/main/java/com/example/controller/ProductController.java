package com.example.controller;

import com.example.model.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class ProductController {

    @GetMapping("/api/products")
    public List<Product> getProducts() {
        return Arrays.asList(new Product(1, "Product A"), new Product(2, "Product B"));
    }
}
