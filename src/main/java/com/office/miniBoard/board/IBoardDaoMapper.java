package com.office.miniBoard.board;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface IBoardDaoMapper {


    int insertBoard(BoardDto boardDto);

    List<BoardDto> selectBoardList();
}
