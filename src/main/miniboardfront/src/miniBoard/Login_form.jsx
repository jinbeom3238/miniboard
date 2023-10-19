import React, { useState } from 'react';
import axios from 'axios';
import Create_account_form from './Create_account_form';
import { useNavigate } from 'react-router-dom';

function Login_form() {
    console.log('Login_form() CALLED!!');

    const navigate = useNavigate;

    const [formData, setFormData] = useState({
        m_id: '',
        m_pw: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const navigateLoginSuccess = () => {
        navigate('/');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8090/member/loginForm", formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);  // "success" 출력

        } catch (error) {
            console.error("로그인 실패:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>ID:</label>
                <input type="text" name="m_id" value={formData.m_id} onChange={handleChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="m_pw" value={formData.m_pw} onChange={handleChange} />
            </div>
            <button type="submit" onoClick={navigateLoginSuccess}>로그인</button>
        </form>
    );


}

export default Login_form;