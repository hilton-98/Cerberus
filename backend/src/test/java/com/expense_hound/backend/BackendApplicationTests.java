package com.expense_hound.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import com.expensehound.backend.Application;

@ActiveProfiles("test")
@SpringBootTest(classes = Application.class)
class BackendApplicationTests {

	@Test
	void contextLoads() {
	}

}
