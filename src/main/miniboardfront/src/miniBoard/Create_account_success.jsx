import React, { useState, useEffect, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";


function Create_account_success() {
    return (
        <div className="wrap">
            <h2>
                회원가입에 성공하였습니다.
            </h2>
            <Routes>
                <Route path="/Login_form" element={<Login_form />} />
            </Routes>


        </div>
    )
}

export default Create_account_success;