package com.expensehound.backend.model.response.home;

import com.expensehound.backend.model.response.IResponse;

public class HomeResponse implements IResponse {
	private String message;

	public HomeResponse(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}
}
