package com.re.boardback.service;

import org.springframework.http.ResponseEntity;

import com.re.boardback.dto.response.user.GetSignInUserResponseDto;

public interface UserService {

    ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email); 
    
}
