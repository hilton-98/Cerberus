package com.expensehound.backend.service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expensehound.backend.entity.User;
import com.expensehound.backend.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public List<User> getUsers() {
		return userRepository.findAll();
	}

	public Optional<User> getUser(String username) {
		return userRepository.findById(username);
	}

	private byte[] generateSalt() {
		byte[] saltBytes = new byte[16];

		SecureRandom random = new SecureRandom();
		random.nextBytes(saltBytes);

		return saltBytes;
	}

	private byte[] generatePasswordHash(byte[] salt, String password) throws NoSuchAlgorithmException {
		MessageDigest md = MessageDigest.getInstance("SHA-512");
		md.update(salt);
		return md.digest(password.getBytes(StandardCharsets.UTF_8));
	}

	public User createUser(String username, String password) throws NoSuchAlgorithmException {
		byte[] saltBytes = generateSalt();
		byte[] hashBytes = generatePasswordHash(saltBytes, password);

		String salt = Base64.getEncoder().encodeToString(saltBytes);
		String hash = Base64.getEncoder().encodeToString(hashBytes);

		User user = new User(username, salt, hash);

		return userRepository.save(user);
	}

	public boolean validateUser(User user, String password) throws NoSuchAlgorithmException {
		byte[] saltBytes = Base64.getDecoder().decode(user.getSalt());
		byte[] hashBytes = generatePasswordHash(saltBytes, password);

		String hash = Base64.getEncoder().encodeToString(hashBytes);

		return Objects.equals(hash, user.getHash());
	}

	public User saveUser(User user) {
		return userRepository.save(user);
	}

	public void deleteUser(String username) {
		userRepository.deleteById(username);
	}
}
