package com.office.miniBoard.board;

import lombok.Data;

@Data
public class BoardDto {
    private String b_no;
    private String use_yn;
    private String m_id;
    private String b_title;
    private String b_content;
    private String b_reg_date;
    private String b_mod_date;
}
