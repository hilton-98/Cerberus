package com.expensehound.backend.utils;

import org.springframework.stereotype.Component;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

@Component
public class EnvLoader {
	private final String secretKey;

	public EnvLoader() {
		Properties properties = new Properties();
		try (FileInputStream input = new FileInputStream(".env")) {
			properties.load(input);
		} catch (IOException e) {
			throw new RuntimeException("Could not load .env file", e);
		}
		secretKey = properties.getProperty("SECRET_KEY");
	}

	public String getSecretKey() {
		return secretKey;
	}
}
