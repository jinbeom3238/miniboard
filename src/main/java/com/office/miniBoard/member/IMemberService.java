package com.office.miniBoard.member;

public interface IMemberService {
    public int createAccountForm(MemberDto memberDto);

    public MemberDto loginForm(MemberDto memberDto);
}
