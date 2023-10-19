package com.office.miniBoard.board;

import java.util.Map;

public interface IBoardService {

    public int boardWriteForm(BoardDto boardDto);

    public Map<String, Object> boardList();
}
