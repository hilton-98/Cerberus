package com.expense_hound.backend.model.response.userresponse;

import com.expense_hound.backend.entity.User;
import com.expense_hound.backend.model.response.IResponse;

public class CreateUserResponse implements IResponse {

	private User user;

	public CreateUserResponse(User user) {
		this.user = user;
	}

	public User getUser() {
		return user;
	}
}
