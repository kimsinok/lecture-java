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

		NotificationService notification1 = context.getBean("notification", NotificationService.class);

		if (notification == notification1) {
			System.out.println("동일한 인스턴스입니다.");
		} else {
			System.out.println("다른 인스턴스입니다.");
		}

	}

}
