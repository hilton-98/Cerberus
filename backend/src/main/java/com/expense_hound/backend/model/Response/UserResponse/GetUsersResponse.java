package com.expense_hound.backend.model.Response.UserResponse;

import java.util.List;

import com.expense_hound.backend.entity.User;
import com.expense_hound.backend.model.Response.IResponse;

public class GetUsersResponse implements IResponse {

	private List<User> users;

	public GetUsersResponse(List<User> users) {
		this.users = users;
	}

	public List<User> getUsers() {
		return users;
	}
}
