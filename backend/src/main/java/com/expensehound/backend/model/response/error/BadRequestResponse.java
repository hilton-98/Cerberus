package com.expensehound.backend.model.response.error;

import org.springframework.http.HttpStatus;

public class BadRequestResponse extends ErrorResponse {
    public BadRequestResponse(String errorMessage) {
        super(HttpStatus.BAD_REQUEST, errorMessage);
    }
}
