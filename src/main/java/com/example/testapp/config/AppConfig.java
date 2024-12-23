package com.example.testapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.testapp.domain.NotificationService;
import com.example.testapp.domain.SmsSender;

@Configuration
public class AppConfig {

    // @Bean(name = "hello")
    // public Hello hello() {
    // return new Hello();
    // }

    @Bean(name = "sms")
    public SmsSender sender() {
        return new SmsSender();
    }

    @Bean(name = "notification")
    public NotificationService notificationService(SmsSender smsSender) { // DI
        return new NotificationService(smsSender);
    }

}
