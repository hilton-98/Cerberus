package com.expense_hound.backend;

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

import com.expense_hound.backend.entity.User;
import com.expense_hound.backend.model.ErrorResponse;
import com.expense_hound.backend.model.IResponse;
import com.expense_hound.backend.model.UserResponse.CreateUserResponse;
import com.expense_hound.backend.model.UserResponse.GetUserByIdResponse;
import com.expense_hound.backend.model.UserResponse.GetUsersResponse;
import com.expense_hound.backend.service.UserService;

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
					.body(new ErrorResponse(HttpStatus.NOT_FOUND, "User not found with id: " + id));
		}

		return ResponseEntity.ok(new GetUserByIdResponse(user.get()));
	}

	@PostMapping("/createUser")
	public ResponseEntity<IResponse> createUser(@RequestBody User user) {
		User newUser = userService.saveUser(user);
		return ResponseEntity.ok(new CreateUserResponse(newUser));
	}
}