package com.re.boardback.service;

import org.springframework.http.ResponseEntity;

import com.re.boardback.dto.response.user.GetSignInUserResponseDto;
import com.re.boardback.dto.response.user.GetUserResponseDto;

public interface UserService {

    ResponseEntity<? super GetUserResponseDto> getUser(String email);
    ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email); 
    
}
