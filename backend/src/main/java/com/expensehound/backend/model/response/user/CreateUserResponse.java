package com.expensehound.backend.model.response.user;

import com.expensehound.backend.entity.User;
import com.expensehound.backend.model.response.IResponse;

public class CreateUserResponse implements IResponse {

	private User user;

	public CreateUserResponse(User user) {
		this.user = user;
	}

	public User getUser() {
		return user;
	}
}
