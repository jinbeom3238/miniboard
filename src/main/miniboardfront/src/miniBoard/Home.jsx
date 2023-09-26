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
            <Routes>
                <Route path="/" element={<h2>This is mini Board!!!</h2>} index />
                <Route path="/Create_account_form" element={<Create_account_form />} />
            </Routes>
            <Footer />

        </div>
    )
}

export default Home;