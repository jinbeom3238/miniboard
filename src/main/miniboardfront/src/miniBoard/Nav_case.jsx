import React from 'react';

function Nav_case({ isLoggedIn, login, createAccount, writeList, logout }) {
  return (
    <nav>
      {isLoggedIn ? (
        <>
          <button onClick={writeList}>글보기</button>
          <button onClick={logout}>로그아웃</button>
        </>
      ) : (
        <>
          <button onClick={login}>로그인</button>
          <button onClick={createAccount}>회원가입</button>
        </>
      )}
    </nav>
  );
}

export default Nav_case;





