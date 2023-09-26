import React from 'react';

function Nav_case({ isLoggedIn, onLogin, onSignUp, onViewPosts, onLogout }) {
  return (
    <nav>
      {isLoggedIn ? (
        <>
          <button onClick={onViewPosts}>글보기</button>
          <button onClick={onLogout}>로그아웃</button>
        </>
      ) : (
        <>
          <button onClick={onLogin}>로그인</button>
          <button onClick={onSignUp}>회원가입</button>
        </>
      )}
    </nav>
  );
}

export default Nav_case;





