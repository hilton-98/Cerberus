package com.expensehound.backend.model.response.success;

import com.expensehound.backend.model.response.IResponse;

public class SuccessResponse implements IResponse {
	private String message;

	public SuccessResponse(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}
}
