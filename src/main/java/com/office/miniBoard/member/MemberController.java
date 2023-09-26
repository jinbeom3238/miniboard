package com.office.miniBoard.member;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@Log4j2
@RequestMapping("/member")
public class MemberController {

    @Autowired
    MemberService memberService;

    @PostMapping("/createAccountForm")
    public String createAccountForm(@RequestBody MemberDto memberDto){
        log.info("createAccountForm()");

        int result = memberService.createAccountForm(memberDto);
        log.info("result {}",result);
        if(result < 0){
            return "fail";
        }

        return "success";
    }

    @PostMapping("/loginForm")
    public String loginForm(@RequestBody MemberDto memberDto){
        log.info("loginForm()");

        int result = memberService.loginForm(memberDto);
        if(result < 0){
            return "fail";
        }
        return "login success";
    }


}
