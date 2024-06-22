package com.expense_hound.backend.model.response.userresponse;

import com.expense_hound.backend.entity.User;
import com.expense_hound.backend.model.response.IResponse;

public class GetUserByIdResponse implements IResponse {

	private User user;

	public GetUserByIdResponse(User user) {
		this.user = user;
	}

	public User getUser() {
		return user;
	}
}