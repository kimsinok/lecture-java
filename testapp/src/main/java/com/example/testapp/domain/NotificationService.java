package com.example.testapp.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Service(value = "notification")
@Scope("singleton")
public class NotificationService {
    // 1. field 주입
    // @Autowired
    // @Qualifier(value = "appPush")
    private Sender sender;

    // 2. 생성자 주입
    @Autowired
    public NotificationService(@Qualifier("appPush") Sender sender) {
        this.sender = sender;
    }

    // 3. setter method DI
    // @Autowired
    // public void setSender(@Qualifier("appPush") Sender sender) {
    // this.sender = sender;
    // }

    public void notify(String username, String message) {
        sender.sendText(username, message);
    }

}
