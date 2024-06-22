package com.expensehound.backend.model.response.user;

import java.util.List;

import com.expensehound.backend.entity.User;
import com.expensehound.backend.model.response.IResponse;

public class GetUsersResponse implements IResponse {

	private List<User> users;

	public GetUsersResponse(List<User> users) {
		this.users = users;
	}

	public List<User> getUsers() {
		return users;
	}
}
