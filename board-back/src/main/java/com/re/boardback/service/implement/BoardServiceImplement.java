package com.re.boardback.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.*;

import com.re.boardback.dto.request.board.PostBoardRequestDto;
import com.re.boardback.dto.response.ResponseDto;
import com.re.boardback.dto.response.board.PostBoardResponseDto;
import com.re.boardback.entity.BoardEntity;
import com.re.boardback.entity.ImageEntity;
import com.re.boardback.repository.BoardRepository;
import com.re.boardback.repository.ImageRepository;
import com.re.boardback.repository.UserRepository;
import com.re.boardback.service.BoardService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardServiceImplement implements BoardService {

    private final UserRepository userRepository;
    private final BoardRepository boardRepository;
    private final ImageRepository imageRepository;
    
    @Override
    public ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email) {
        
        try {

            boolean existedEmail = userRepository.existsByEmail(email);
            if (!existedEmail) return PostBoardResponseDto.notExistUser();

            BoardEntity boardEntity = new BoardEntity(dto, email);
            boardRepository.save(boardEntity);

            int boardNumber = boardEntity.getBoardNumber();

            List<String> boardImageList = dto.getBoardImageList();
            List<ImageEntity> imageEntities = new ArrayList<>();

            for (String iamge: boardImageList) {
                ImageEntity imageEntity = new ImageEntity(boardNumber, iamge);
                imageEntities.add(imageEntity);
            }
            imageRepository.saveAll(imageEntities);
            
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return PostBoardResponseDto.success();

    }
    
}
