package com.albou.book.handler;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public enum BusinessErrorCode {
    NO_CODE(0,"No code", HttpStatus.NOT_IMPLEMENTED),
    INCORRECT_CURRENT_PASSWORD(300,"Current password is incorrect", HttpStatus.BAD_REQUEST),
    NEW_PASSWORD_DOES_NOT_MATCH(301, "The new password does not match", HttpStatus.BAD_REQUEST),
    ACCOUNT_DISABLED(303,"User Account is disable",HttpStatus.FORBIDDEN),
    ACCOUNT_LOCKED(302, "User Account is locked", HttpStatus.FORBIDDEN),
    BAD_CREDENTIALS(304,"Login/password is incorrect", HttpStatus.FORBIDDEN)
    ;

    @Getter
    private int code;
    @Getter
    private String description;
    @Getter
    private HttpStatus httpStatus;

    BusinessErrorCode(int code, String description, HttpStatus httpStatus) {
        this.code = code;
        this.description = description;
        this.httpStatus = httpStatus;
    }
}
