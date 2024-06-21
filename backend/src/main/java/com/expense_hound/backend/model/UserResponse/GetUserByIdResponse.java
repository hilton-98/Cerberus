package com.expense_hound.backend.model.UserResponse;

import com.expense_hound.backend.entity.User;
import com.expense_hound.backend.model.IResponse;

public class GetUserByIdResponse implements IResponse {

	private User user;

	public GetUserByIdResponse(User user) {
		this.user = user;
	}

	public User getUser() {
		return user;
	}
}