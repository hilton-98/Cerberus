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
import com.expense_hound.backend.model.UserResponse.GetUserByIdResponse;
import com.expense_hound.backend.service.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/users")
	public List<User> getUsers() {
		return userService.getAllUsers();
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<IResponse> getUserById(@PathVariable Integer id) {
		Optional<User> user = userService.getUserById(id);

		if (user.isPresent()) {
			return ResponseEntity.ok(new GetUserByIdResponse(user.get()));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new ErrorResponse(HttpStatus.NOT_FOUND, "User not found with id: " + id));
		}
	}

	@PostMapping("/createUser")
	public User createUser(@RequestBody User user) {
		return userService.saveUser(user);
	}
}