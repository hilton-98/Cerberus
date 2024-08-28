package com.expensehound.backend.controller;

import java.util.List;
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
import com.expensehound.backend.model.response.error.NotFoundResponse;
import com.expensehound.backend.model.response.success.SuccessResponse;
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

	@GetMapping(path = controllerUrl + "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<IResponse> getUserById(@PathVariable String id) {
		Optional<User> user = userService.getUserById(id);

		if (user.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new NotFoundResponse("User not found with id: " + id));
		}

		return ResponseEntity.ok(new UserResponse(user.get()));
	}

	@PostMapping(path = controllerUrl
			+ "/createUser", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<IResponse> createUser(@RequestBody User user) {
		User newUser = userService.saveUser(user);
		return ResponseEntity.ok(new UserResponse(newUser));
	}

	@PutMapping(path = controllerUrl
			+ "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<IResponse> updateUser(@PathVariable String id, @RequestBody User newUser) {
		Optional<User> user = userService.getUserById(id);

		if (user.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new NotFoundResponse("User not found with id: " + id));
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