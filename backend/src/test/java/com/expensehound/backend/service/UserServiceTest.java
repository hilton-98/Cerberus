package com.expensehound.backend.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.NoSuchElementException;
import java.util.Optional;

import com.expensehound.backend.entity.User;
import com.expensehound.backend.repository.UserRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ActiveProfiles;

@ActiveProfiles("test")
@DataJpaTest
@Import(UserService.class)
class UserServiceTest {

	private final String TEST_ID_DNE = "some-rando-id";
	private final String TEST_NAME = "Tanner Hilton";
	private final String TEST_PASSWORD = "Sports";

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserService userService;

	@BeforeEach
	void setUp() {
		userRepository.deleteAll();
	}

	// @Test
	// void testGetUserById_Success() {

	// 	User user = new User(TEST_NAME, TEST_PASSWORD);

	// 	User saveUserResult = userService.saveUser(user);
	// 	assertEquals(user, saveUserResult);
	// 	User getUserResult = userService.getUserById(user.getId()).get();
	// 	assertEquals(user, getUserResult);
	// }

	// @Test
	// void testGetUserById_Failure() {

	// 	Optional<User> optionalUser = userService.getUserById(TEST_ID_DNE);
	// 	assertEquals(true, optionalUser.isEmpty());
	// 	assertThrows(NoSuchElementException.class, () -> optionalUser.get());
	// }

	// @Test
	// void testDeleteUser_Success() {
	// 	User user = new User(TEST_NAME, TEST_PASSWORD);

	// 	User saveUserResult = userService.saveUser(user);
	// 	assertEquals(user, saveUserResult);

	// 	userService.deleteUser(user.getId());
	// 	Optional<User> optionalUser = userService.getUserById(user.getId());
	// 	assertTrue(optionalUser.isEmpty());
	// 	assertThrows(NoSuchElementException.class, () -> optionalUser.get());
	// }
}