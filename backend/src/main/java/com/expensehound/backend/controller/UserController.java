package com.expensehound.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.expensehound.backend.entity.User;
import com.expensehound.backend.model.response.IResponse;
import com.expensehound.backend.model.response.error.NotFoundResponse;
import com.expensehound.backend.model.response.user.CreateUserResponse;
import com.expensehound.backend.model.response.user.GetUserByIdResponse;
import com.expensehound.backend.model.response.user.GetUsersResponse;
import com.expensehound.backend.service.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/users")
	public ResponseEntity<IResponse> getUsers() {
		List<User> users = userService.getUsers();
		return ResponseEntity.ok(new GetUsersResponse(users));
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<IResponse> getUserById(@PathVariable Integer id) {
		Optional<User> user = userService.getUserById(id);

		if (user.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new NotFoundResponse("User not found with id: " + id));
		}

		return ResponseEntity.ok(new GetUserByIdResponse(user.get()));
	}

	@PostMapping("/createUser")
	public ResponseEntity<IResponse> createUser(@RequestBody User user) {
		User newUser = userService.saveUser(user);
		return ResponseEntity.ok(new CreateUserResponse(newUser));
	}
}