package com.office.miniBoard.config;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;

public class MyErrorController implements ErrorController {

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        // 에러 처리 로직을 작성합니다.
        return "customErrorPage"; // 커스텀 에러 페이지 뷰 이름
    }

    public String getErrorPath() {
        return "/error";
    }

}
