import React, { useState } from 'react';
import Nav_case from './Nav_case';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Create_account_form from './Create_account_form';

function Nav() {
  const [loginedSession, setLoginedSession] = useState(null); // null로 초기화 (실제로는 API 등을 통해 값을 받아올 수 있음)

  return (
    <div>
      {loginedSession ? (
        // 로그인된 경우
        <>
          <Link to="#">로그아웃</Link>
          <Link to="/write">글쓰기</Link>
        </>
      ) : (
        // 로그인되지 않은 경우
        <>
          <Link to="/Login_form">로그인</Link>
          <Link to="/Create_account_form">회원가입</Link>
        </>
      )}

    </div>
  );
}

export default Nav;