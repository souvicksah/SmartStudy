package com.sou;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.session.config.annotation.web.server.EnableSpringWebSession;

@SpringBootApplication(scanBasePackages = "com.sou")
public class SmartStudyApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmartStudyApplication.class, args);
	}

}
