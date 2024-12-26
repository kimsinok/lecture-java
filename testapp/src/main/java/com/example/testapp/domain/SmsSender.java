package com.example.testapp.domain;

public class SmsSender implements Sender {

    public void sendText(String username, String messsage) {

        System.out.println("SMS " + username + " : " + messsage);

    }

}
