import logo from './logo.svg';
import './App.css';
import Home from "./miniBoard/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login_form from './miniBoard/Login_form';
import Create_account_form from './miniBoard/Create_account_form';
import Header from './miniBoard/Header';
import Nav from './miniBoard/Nav';
import Footer from './miniBoard/Footer';
import Write_board_form from './miniBoard/board/Write_board_form';
import Board_list_form from './miniBoard/board/Board_list_form';
import Board_detail_form from './miniBoard/board/Board_detail_form';
import Modify_board_form from './miniBoard/board/Modify_board_form';
import Regist_room from './miniBoard/board/Regist_room';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>


      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create_account_form" element={<Create_account_form />} />
          <Route path="/Login_form" element={<Login_form />} />
          <Route path="/board/Write_board_form" element={<Write_board_form />} />
          <Route path="/board/Board_list_form" element={<Board_list_form />} />
          <Route path="/board/Board_detail_form/:no" element={<Board_detail_form />} />
          <Route path="/board/Modify_board_form/:no" element={<Modify_board_form />} />
          <Route path="/board/Regist_room/" element={<Regist_room />} />
        </Routes>
      </BrowserRouter >
      <Footer />
    </>
  );
}

export default App;
