package com.office.miniBoard.board;

import com.office.miniBoard.member.MemberDto;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@Log4j2
@RequestMapping("/board")
public class BoardController {

    @Autowired
    BoardService boardService;

    @PostMapping("/boardWriteForm")
    public String boardWriteForm(@RequestBody BoardDto boardDto){
        log.info("boardWriteForm()");

        int result = boardService.boardWriteForm(boardDto);
        log.info("result {}",result);

        if(result < 0){
            return "fail";
        }

        return "success";
    }

    @GetMapping("/boardList")
    public Object boardList(Model model){
        log.info("boardList()");

        Map<String, Object> map = boardService.boardList();
        List<BoardDto> boardDtos = (List<BoardDto>)map.get("boardDtos");


        if(boardDtos == null){
            log.info("boardDtos is null");
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            log.info("boardDtos is not null");
            model.addAttribute("boardDtos", boardDtos);
            return boardDtos;
        }

    }

}
