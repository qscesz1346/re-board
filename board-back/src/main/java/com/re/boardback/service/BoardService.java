package com.re.boardback.service;

import org.springframework.http.ResponseEntity;

import com.re.boardback.dto.request.board.PostBoardRequestDto;
import com.re.boardback.dto.response.board.PostBoardResponseDto;

public interface BoardService {
    ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);
}
