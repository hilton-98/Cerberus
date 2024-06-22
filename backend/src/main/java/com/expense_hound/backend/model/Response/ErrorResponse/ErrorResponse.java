package com.expense_hound.backend.model.response.errorresponse;

import org.springframework.http.HttpStatus;

import com.expense_hound.backend.model.response.IResponse;

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