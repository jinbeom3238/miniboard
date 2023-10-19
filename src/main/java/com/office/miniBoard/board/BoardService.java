package com.office.miniBoard.board;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Log4j2
public class BoardService implements IBoardService{

    @Autowired
    IBoardDaoMapper iBoardDaoMapper;

    final static public int DATABASE_COMMUNICATION_TROUBLE = -1;
    final static public int INSERT_FAIL_AT_DATABASE = 0;
    final static public int INSERT_SUCCESS_AT_DATABASE = 1;


    public int boardWriteForm(BoardDto boardDto) {

        int result = iBoardDaoMapper.insertBoard(boardDto);

        switch (result) {
            case DATABASE_COMMUNICATION_TROUBLE:
                log.info("DATABASE COMMUNICATION TROUBLE");
                break;

            case INSERT_FAIL_AT_DATABASE:
                log.info("INSERT FAIL AT DATABASE");
                break;

            case INSERT_SUCCESS_AT_DATABASE:
                log.info("INSERT SUCCESS AT DATABASE");
                break;

        }
        log.info(result);
        return result;

    }

    public Map<String, Object> boardList() {
        log.info("boardList()");

        Map<String, Object> map = new HashMap<>();

        List<BoardDto> boardDtos = iBoardDaoMapper.selectBoardList();

        if(boardDtos == null){
            log.info("boardDtos are null");
            return null;
        } else {
            log.info("boardDtos are not null");
            map.put("boardDtos", boardDtos);
            return map;
        }

    }
}
