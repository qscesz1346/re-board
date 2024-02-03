package com.re.boardback.service;

import org.springframework.http.ResponseEntity;

import com.re.boardback.dto.response.search.GetPopularListResponseDto;

public interface SearchService {

    ResponseEntity<? super GetPopularListResponseDto> getPopularList();
    
}
