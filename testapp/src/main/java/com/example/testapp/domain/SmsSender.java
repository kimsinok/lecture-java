package com.example.testapp.domain;

import org.springframework.stereotype.Component;

//@Primary
@Component(value = "sms")
public class SmsSender implements Sender {

    public void sendText(String username, String messsage) {

        System.out.println("SMS " + username + " : " + messsage);

    }

}
