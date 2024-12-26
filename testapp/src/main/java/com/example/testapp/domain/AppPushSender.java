package com.example.testapp.domain;

public class AppPushSender implements Sender {

    @Override
    public void sendText(String username, String message) {

        System.out.println("App Push " + username + " : " + message);
    }

}
