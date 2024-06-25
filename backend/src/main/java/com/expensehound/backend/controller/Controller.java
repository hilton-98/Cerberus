package com.expensehound.backend.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expensehound.backend.model.response.IResponse;
import com.expensehound.backend.model.response.success.SuccessResponse;

@RestController
public class Controller {

	@GetMapping("/")
	public IResponse home() {
		return new SuccessResponse("Welcome to ExpenseHound!");
	}

	@GetMapping("/expenses")
	public List<String> getExpenses() {
		return Arrays.asList("Expense1", "Expense2", "Expense3");
	}
}