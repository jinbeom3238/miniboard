import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function Board_list_form() {

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const navigateDetail = (no) => {

        navigate(`/board/Board_detail_form/${no}`);

    }



    useEffect(() => {
        getSpringData();

    }, []);

    async function getSpringData() {
        await axios.get('http://localhost:8090/board/boardList').then((res) => {
            console.log("list success");
            setData(res.data);
        })
            .catch((error) => {
                console.error("An error occurred while fetching the data.", error);
            })
    };


    return (
        <div>
            <h2>게시판 리스트</h2>
            <div>
                {data ? data.map((datas) => (
                    <Card key={datas.b_no} style={{ margin: '10px 0' }} onClick={() => navigateDetail(datas.b_no)}>
                        <CardContent>
                            <Typography variant="h6">
                                번호: {datas.b_no}
                            </Typography>
                            <Typography color="textSecondary">
                                작성자: {datas.m_id}
                            </Typography>
                            <Typography variant="body2">
                                제목: {datas.b_title}
                            </Typography>
                        </CardContent>
                    </Card>
                )) : '데이터가 없습니다.'}
            </div>
        </div >
    );

}

export default Board_list_form;