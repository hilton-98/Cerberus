package com.expensehound.backend.model.response.user;

import com.expensehound.backend.entity.User;
import com.expensehound.backend.model.response.IResponse;

public class UserResponse implements IResponse {

	private User user;

	public UserResponse(User user) {
		this.user = user;
	}

	public User getUser() {
		return user;
	}
}