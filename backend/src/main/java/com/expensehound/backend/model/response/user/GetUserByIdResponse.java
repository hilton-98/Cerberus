package com.expensehound.backend.model.response.user;

import com.expensehound.backend.entity.User;
import com.expensehound.backend.model.response.IResponse;

public class GetUserByIdResponse implements IResponse {

	private User user;

	public GetUserByIdResponse(User user) {
		this.user = user;
	}

	public User getUser() {
		return user;
	}
}