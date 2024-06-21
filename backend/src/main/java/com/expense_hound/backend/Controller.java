package com.expense_hound.backend;

import java.util.Arrays;
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
import com.expense_hound.backend.service.UserService;

@RestController public class Controller {

    @Autowired private UserService userService;

    @GetMapping("/") public String home() {
        return "Welcome to ExpenseHound (with Hot Reloading)!";
    }

    @GetMapping("/expenses") public List<String> getExpenses() {
        return Arrays.asList("Expense1", "Expense2", "Expense3");
    }

    @GetMapping("/users") public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/createUser") public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/user/{id}") public ResponseEntity<Object> getUserById(@PathVariable Integer id) {
        Optional<User> user = userService.getUserById(id);

        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with id: " + id);
        }
    }
}