package com.expense_hound.backend.model.response.homeresponse;

import com.expense_hound.backend.model.response.IResponse;

public class HomeResponse implements IResponse {
	private String message;

	public HomeResponse(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}
}
