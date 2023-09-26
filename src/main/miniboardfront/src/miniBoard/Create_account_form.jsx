import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create_account_form() {
    console.log('create_account_form() CALLED!!');

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        m_id: '',
        m_pw: '',
        m_name: '',
        m_mail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8090/member/createAccountForm", formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);  // "success" 출력

            if (response.data === "success") {
                navigate('/Create_account_success');
            }

        } catch (error) {
            console.error("회원가입 실패:", error);
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
            <div>
                <label>name:</label>
                <input type="text" name="m_name" value={formData.m_name} onChange={handleChange} />
            </div>
            <div>
                <label>mail:</label>
                <input type="mail" name="m_mail" value={formData.m_mail} onChange={handleChange} />
            </div>
            <button type="submit">회원가입</button>
        </form>
    );


}

export default Create_account_form;