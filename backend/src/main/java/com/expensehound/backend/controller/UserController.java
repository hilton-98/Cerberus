package com.expensehound.backend.controller;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.expensehound.backend.entity.User;
import com.expensehound.backend.model.response.IResponse;
import com.expensehound.backend.model.response.error.ErrorResponse;
import com.expensehound.backend.model.response.error.NotFoundResponse;
import com.expensehound.backend.model.response.success.SuccessResponse;
import com.expensehound.backend.model.response.user.UserRequest;
import com.expensehound.backend.model.response.user.UserResponse;
import com.expensehound.backend.model.response.user.UsersResponse;
import com.expensehound.backend.service.UserService;

@RestController
public class UserController {

	private final String controllerUrl = "/user";

	@Autowired
	private UserService userService;

	@GetMapping(path = controllerUrl + "/users", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<IResponse> getUsers() {
		List<User> users = userService.getUsers();
		return ResponseEntity.ok(new UsersResponse(users));
	}

	@GetMapping(path = controllerUrl + "/{username}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<IResponse> getUser(@PathVariable String username) {
		Optional<User> user = userService.getUser(username);

		if (user.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new NotFoundResponse("User not found"));
		}

		return ResponseEntity.ok(new UserResponse(user.get()));
	}

	@PostMapping(path = controllerUrl
			+ "/createUser", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<IResponse> createUser(@RequestBody UserRequest request) throws NoSuchAlgorithmException {

		String username = request.getUsername();
		String password = request.getPassword();

		SecureRandom random = new SecureRandom();
		byte[] saltBytes = new byte[16];
		random.nextBytes(saltBytes);

		MessageDigest md = MessageDigest.getInstance("SHA-512");
		md.update(saltBytes);

		byte[] hashBytes = md.digest(password.getBytes(StandardCharsets.UTF_8));

		String salt = Base64.getEncoder().encodeToString(saltBytes);
		String hash = Base64.getEncoder().encodeToString(hashBytes);

		User user = new User(username, salt, hash);

		User newUser = userService.saveUser(user);
		return ResponseEntity.ok(new UserResponse(newUser));
	}

	@GetMapping(path = controllerUrl
			+ "/validateUser", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<IResponse> validateUser(@RequestBody UserRequest request) throws NoSuchAlgorithmException {

		String username = request.getUsername();
		String password = request.getPassword();

		Optional<User> userOption = userService.getUser(username);

		if (userOption.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new ErrorResponse(HttpStatus.NOT_FOUND, "Username not found"));
		}

		User user = userOption.get();

		String salt = user.getSalt();
		byte[] saltBytes = Base64.getDecoder().decode(salt);

		MessageDigest md = MessageDigest.getInstance("SHA-512");
		md.update(saltBytes);

		byte[] hashBytes = md.digest(password.getBytes(StandardCharsets.UTF_8));

		String hash = Base64.getEncoder().encodeToString(hashBytes);

		if (!Objects.equals(hash, user.getHash())) {
			return ResponseEntity.badRequest().body(new ErrorResponse(HttpStatus.BAD_REQUEST, "Incorrect password"));
		}

		return ResponseEntity.ok(new SuccessResponse("Valid user"));
	}

	@PutMapping(path = controllerUrl
			+ "/{username}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<IResponse> updateUser(@PathVariable String username, @RequestBody User newUser) {
		Optional<User> user = userService.getUser(username);

		if (user.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new NotFoundResponse("User not found"));
		}

		User updatedUser = user.get();
		updatedUser.setUsername(newUser.getUsername());
		userService.saveUser(updatedUser);

		return ResponseEntity.ok(new UserResponse(updatedUser));
	}

	@DeleteMapping(path = controllerUrl + "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<IResponse> deleteUser(@PathVariable String id) {
		userService.deleteUser(id);
		return ResponseEntity.ok(new SuccessResponse("User successfully deleted"));
	}
}