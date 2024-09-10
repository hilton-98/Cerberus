package com.expensehound.backend.controller;

import com.expensehound.backend.Application;
import com.expensehound.backend.entity.User;
import com.expensehound.backend.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.HashMap;
import java.util.Map;

@ActiveProfiles("test")
@SpringBootTest(classes = Application.class)
class UserControllerTest {

	private final String TEST_ID_DNE = "a-new-hope";
	private final String TEST_NAME = "Darth Vader";
	private final String TEST_PASSWORD = "Luke1sMyS0n";

	private final String CREATE_USER_URL = "/user/createUser";
	private final String GET_USER_BY_ID_URL = "/user/{id}";

	enum UserKey {
		ID("id"), NAME("name");

		private final String key;

		UserKey(String key) {
			this.key = key;
		}

		public String getKey() {
			return key;
		}
	}

	private final Map<UserKey, String> userJsonKeys = new HashMap<>() {
		{
			put(UserKey.ID, "$.user.id");
			put(UserKey.NAME, "$.user.name");
		}
	};

	@Autowired
	private WebApplicationContext context;

	private MockMvc mockMvc;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ObjectMapper objectMapper;

	@BeforeEach
	void setUp() {
		mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
		userRepository.deleteAll();
	}

	@Test
	void testGetUserById_UserExists() throws Exception {

		User user = new User(TEST_NAME, TEST_PASSWORD);

		String userJson = objectMapper.writeValueAsString(user);

		mockMvc.perform(post(CREATE_USER_URL).contentType(MediaType.APPLICATION_JSON).content(userJson))
				.andExpect(status().isOk()).andExpect(jsonPath(userJsonKeys.get(UserKey.NAME)).value(TEST_NAME));

		User savedUser = userRepository.findAll().get(0);
		String id = savedUser.getId();

		mockMvc.perform(get(GET_USER_BY_ID_URL, id)).andExpect(status().isOk())
				.andExpect(jsonPath(userJsonKeys.get(UserKey.ID)).value(id))
				.andExpect(jsonPath(userJsonKeys.get(UserKey.NAME)).value(TEST_NAME));
	}

	@Test
	void testGetUserById_UserDoesNotExist() throws Exception {
		mockMvc.perform(get(GET_USER_BY_ID_URL, TEST_ID_DNE)).andExpect(status().isNotFound());
	}
}