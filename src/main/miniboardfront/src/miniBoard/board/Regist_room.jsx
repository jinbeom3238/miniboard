import React from "react";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import Map_Kakao from "../Map_kakako";


function Regist_room(item) {
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
                navigate('/miniBoard/Create_account_success');
            }

        } catch (error) {
            console.error("회원가입 실패:", error);
        }
    };

    return (

        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    방등록
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="m_id"
                        label="ID"
                        name="m_id"
                        autoComplete="m_id"
                        autoFocus
                        value={formData.m_id}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="m_pw"
                        label="Password"
                        type="password"
                        id="m_pw"
                        autoComplete="current-password"
                        value={formData.m_pw}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="m_name"
                        label="Name"
                        type="text"
                        id="m_name"
                        autoComplete="m_name"
                        value={formData.m_name}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="m_mail"
                        label="Email"
                        type="email"
                        id="m_mail"
                        autoComplete="m_mail"
                        value={formData.m_mail}
                        onChange={handleChange}
                    />
                    <div id="map">
                        <Map_Kakao />
                    </div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        회원가입
                    </Button>
                </Box>
            </Box>
        </Container>
    );


}

export default Regist_room;