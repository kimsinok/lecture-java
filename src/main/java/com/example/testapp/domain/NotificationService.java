package com.example.testapp.domain;

public class NotificationService {

    private final SmsSender smsSender;

    public NotificationService(SmsSender smsSender) {
        this.smsSender = smsSender;
    }

    public void notify(String username, String message) {
        smsSender.senMessage(username, message);
    }

}
