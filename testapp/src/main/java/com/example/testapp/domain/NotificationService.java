package com.example.testapp.domain;

public class NotificationService {

    private final Sender sender;

    public NotificationService(Sender sender) {
        this.sender = sender;
    }

    public void notify(String username, String message) {
        sender.sendText(username, message);
    }

}
