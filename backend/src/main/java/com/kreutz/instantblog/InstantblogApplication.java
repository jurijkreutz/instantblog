package com.kreutz.instantblog;

import com.kreutz.instantblog.service.InitService;
import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class InstantblogApplication {

	private final InitService initService;

	public InstantblogApplication(InitService initService) {this.initService = initService;}

	public static void main(String[] args) {
		SpringApplication.run(InstantblogApplication.class, args);
	}

	@PostConstruct
	public void initialize() {
		initService.createUserEntries();
	}

}
