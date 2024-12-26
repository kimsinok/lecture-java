package com.example.testapp.domain;

import org.springframework.stereotype.Component;

@Component(value = "appPush")
public class AppPushSender implements Sender {

    @Override
    public void sendText(String username, String message) {

        System.out.println("App Push " + username + " : " + message);
    }

}
