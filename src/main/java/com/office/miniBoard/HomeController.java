package com.office.miniBoard;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2
public class HomeController {

    @GetMapping(value={"", "/"})
//    @ResponseBody
//@GetMapping({"/", "/{path:[^\\.]*}"})
    public String home() {
        log.info("home()");

//    return "forward:/index.html";
        return "index";
    }
}
