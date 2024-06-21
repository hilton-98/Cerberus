package com.expense_hound.backend;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

	@GetMapping("/")
	public String home() {
		return "Welcome to ExpenseHound (with Hot Reloading)!";
	}

	@GetMapping("/expenses")
	public List<String> getExpenses() {
		return Arrays.asList("Expense1", "Expense2", "Expense3");
	}
}