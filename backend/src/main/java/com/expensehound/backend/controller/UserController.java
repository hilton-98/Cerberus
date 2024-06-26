package com.expensehound.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

	@GetMapping(controllerUrl + "/users")
	public ResponseEntity<IResponse> getUsers() {
		List<User> users = userService.getUsers();
		return ResponseEntity.ok(new UsersResponse(users));
	}

	@GetMapping(controllerUrl + "/{id}")
	public ResponseEntity<IResponse> getUserById(@PathVariable Integer id) {
		Optional<User> user = userService.getUserById(id);

		if (user.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new NotFoundResponse("User not found with id: " + id));
		}

		return ResponseEntity.ok(new UserResponse(user.get()));
	}

	@PostMapping(controllerUrl + "/createUser")
	public ResponseEntity<IResponse> createUser(@RequestBody User user) {
		User newUser = userService.saveUser(user);
		return ResponseEntity.ok(new UserResponse(newUser));
	}

	@DeleteMapping(controllerUrl + "/{id}")
	public ResponseEntity<IResponse> deleteUser(@PathVariable Integer id) {
		userService.deleteUser(id);
		return ResponseEntity.ok(new SuccessResponse("User successfully deleted"));
	}
}