package com.example.testapp.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class HelloController {

    @GetMapping("/hi")
    public String sayHello() {
        return "Hello, SpringBoot!!";
    }

}
