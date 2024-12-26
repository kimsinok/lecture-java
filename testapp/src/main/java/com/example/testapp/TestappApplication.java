package com.example.testapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import com.example.testapp.domain.NotificationService;

@SpringBootApplication
public class TestappApplication {

	public static void main(String[] args) {

		// Spring Container
		ConfigurableApplicationContext context = SpringApplication.run(TestappApplication.class, args);

		// Hello hello = context.getBean("hello", Hello.class);

		// System.out.println(hello.sayHello());

		// Hi hi = context.getBean("hi", Hi.class);

		// System.out.println(hi.hi("kim"));

		NotificationService notification = context.getBean("notification", NotificationService.class);

		notification.notify("kim", "Hello");

	}

}
