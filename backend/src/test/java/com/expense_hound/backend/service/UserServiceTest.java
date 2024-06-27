package com.expense_hound.backend.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.NoSuchElementException;
import java.util.Optional;

import com.expensehound.backend.Application;
import com.expensehound.backend.entity.User;
import com.expensehound.backend.repository.UserRepository;
import com.expensehound.backend.service.UserService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

@ActiveProfiles("test")
@SpringBootTest(classes = Application.class)
@Transactional
class UserServiceTest {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserService userService;

	@BeforeEach
	void setUp() {
		userRepository.deleteAll();
	}

	@Test
	void testGetUserById_Success() {

		String name = "Tanner Pearson";
		User user = new User(name);

		User saveUserResult = userService.saveUser(user);
		assertEquals(user, saveUserResult);
		User getUserResult = userService.getUserById(user.getId()).get();
		assertEquals(user, getUserResult);
	}

	@Test
	void testGetUserById_Failure() {

		String id = "some-rando-id";
		Optional<User> optionalUser = userService.getUserById(id);
		assertEquals(true, optionalUser.isEmpty());
		assertThrows(NoSuchElementException.class, () -> optionalUser.get());
	}

	@Test
	void testDeleteUser_Success() {
		String name = "Tanner Pearson";
		User user = new User(name);

		User saveUserResult = userService.saveUser(user);
		assertEquals(user, saveUserResult);

		userService.deleteUser(user.getId());
		Optional<User> optionalUser = userService.getUserById(user.getId());
		assertTrue(optionalUser.isEmpty());
		assertThrows(NoSuchElementException.class, () -> optionalUser.get());
	}
}