package com.office.miniBoard.member;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface IMemberDaoMapper {

    boolean isMember(String mId);

    int insertMember(MemberDto memberDto);

    MemberDto selectMember(MemberDto memberDto);
}
