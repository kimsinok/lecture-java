package com.example.articleapp.util;

import java.io.File;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

// CommandLineRunner
// 애플리케이션이 시작될 때 특정 로직을 수행하고자 할때 사용

@Component
@Slf4j
public class DirectoyInitializer implements ApplicationRunner {

    @Override
    public void run(ApplicationArguments args) throws Exception {

        File tempDir = new File("/tmp/uploads");

        if (!tempDir.exists()) {

            boolean created = tempDir.mkdir();

            if (created) {
                log.info("Upload directory created : {}", tempDir.getAbsolutePath());
            } else {
                log.info("Failed to crate upload directory");
            }

        }

    }

}
