import React, { useState } from 'react';
import Nav_case from './Nav_case';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Create_account_form from './Create_account_form';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



function Nav() {
  const [loginedSession, setLoginedSession] = useState(null); // null로 초기화 (실제로는 API 등을 통해 값을 받아올 수 있음)

  const navigate = useNavigate();

  const navigateLoginForm = () => {
    navigate('/Login_form');
  };

  const navigateCreateAccountForm = () => {
    navigate('/Create_account_form');
  };

  const navigateWriteBoardForm = () => {
    navigate('/board/Write_board_form');
  };

  const navigateBoardListForm = () => {
    navigate('/board/Board_list_form');
  };

  const navigateRegistRoom = () => {
    navigate('/board/Regist_room');
  }

  return (
    <div>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >

              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>

            <Button color="inherit" onClick={navigateWriteBoardForm}>글쓰기</Button>
            <Button color="inherit" onClick={navigateBoardListForm}>게시판 목록</Button>
            <Button color="inherit" onClick={navigateRegistRoom}>카카오맵 방등록</Button>

            <Button color="inherit" onClick={navigateLoginForm}>로그인</Button>
            <Button color="inherit" onClick={navigateCreateAccountForm}>회원가입</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* {loginedSession ? (
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
      )} */}

    </div>
  );
}

export default Nav;