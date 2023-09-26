import React, { useState, useEffect, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Create_account_form from "./Create_account_form";

function Home() {
    return (
        <div className="wrap">
            <Header />
            <Nav />
            <h2>
                회원가입에 성공하였습니다.
            </h2>
            <Routes>
                <Route path="/Login_form" element={<Login_form />} />
            </Routes>
            <Footer />

        </div>
    )
}

export default Home;