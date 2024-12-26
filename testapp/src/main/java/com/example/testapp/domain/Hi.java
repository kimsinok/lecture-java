package com.example.testapp.domain;

import org.springframework.stereotype.Component;

@Component("hi")
public class Hi {

    public String hi(String username) {
        return "Hi, " + username;
    }

}
