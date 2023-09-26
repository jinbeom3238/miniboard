package com.office.miniBoard.member;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class MemberService {

    final static public int DATABASE_COMMUNICATION_TROUBLE = -1;
    final static public int INSERT_FAIL_AT_DATABASE = 0;
    final static public int INSERT_SUCCESS_AT_DATABASE = 1;

    @Autowired
    IMemberDaoMapper iMemberDaoMapper;

//    @Autowired
//    PasswordEncoder passwordEncoder;

    public int createAccountForm(MemberDto memberDto) {
        log.info("createAccountForm");

        boolean isMember = iMemberDaoMapper.isMember(memberDto.getM_id());

        if (!isMember) {

//            memberDto.setM_pw(passwordEncoder.encode(memberDto.getM_pw()));

            int result = iMemberDaoMapper.insertMember(memberDto);

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

        } else {
            return 0;

        }

    }

    public int loginForm(MemberDto memberDto) {
        log.info("loginForm()");

        return 1;

    }
}
