package com.expensehound.backend.model.response.error;

import org.springframework.http.HttpStatus;

public class NotFoundResponse extends ErrorResponse {
	public NotFoundResponse(String errorMessage) {
		super(HttpStatus.NOT_FOUND, errorMessage);
	}
}
