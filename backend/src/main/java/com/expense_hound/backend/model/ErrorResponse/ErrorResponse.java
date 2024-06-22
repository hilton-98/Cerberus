package com.expense_hound.backend.model.ErrorResponse;

import org.springframework.http.HttpStatus;

import com.expense_hound.backend.model.IResponse;

public class ErrorResponse implements IResponse {

	private HttpStatus status;
	private String errorMessage;

	public ErrorResponse(HttpStatus status, String errorMessage) {
		this.status = status;
		this.errorMessage = errorMessage;
	}

	public HttpStatus getStatus() {
		return status;
	}

	public String getErrorMessage() {
		return errorMessage;
	}
}