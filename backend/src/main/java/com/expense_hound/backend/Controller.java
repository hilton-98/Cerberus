package com.expense_hound.backend;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense_hound.backend.entity.User;
import com.expense_hound.backend.service.UserService;

@RestController
public class Controller {

   @Autowired
   private UserService userService;

	@GetMapping("/")
	public String home() {
		return "Welcome to ExpenseHound (with Hot Reloading)!";
	}

	@GetMapping("/expenses")
	public List<String> getExpenses() {
		return Arrays.asList("Expense1", "Expense2", "Expense3");
	}

	@GetMapping("/users")
	public List<User> getUsers() {
		return userService.getAllUsers();
	}

	@GetMapping("/createUser")
	public User createUser() {

		User user = new User();
		user.setId(0);
		user.setName("hilton98");

		return userService.saveUser(user);
	}
}