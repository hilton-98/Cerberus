package com.expensehound.backend.model.response.user;

import java.util.List;

import com.expensehound.backend.entity.User;
import com.expensehound.backend.model.response.IResponse;

public class UsersResponse implements IResponse {

	private List<User> users;

	public UsersResponse(List<User> users) {
		this.users = users;
	}

	public List<User> getUsers() {
		return users;
	}
}
