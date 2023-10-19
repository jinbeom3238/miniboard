import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button } from '@mui/material';

function Board_detail_form() {

    const { no } = useParams();

    const [detailData, setDetailData] = useState(null);
    const navigate = useNavigate();

    const handleModify = () => {
        navigate(`/board/Modify_board_form/${no}`);
    }

    const deleteHandler = () => {

    }


    useEffect(() => {
        const getDetailData = async () => {
            try {
                const response = await axios.get(`http://localhost:8090/board/boardList`);
                console.log("detail list success");
                const numberDetailData = response.data.find(function (data) {
                    // return data.b_no === parseInt(no);
                    return data.b_no == no;
                })
                setDetailData(numberDetailData);
            } catch (error) {
                console.error("error", error);
            }
        };

        getDetailData();

    }, [no]);



    return (
        <div>
            {detailData ?
                <Card key={detailData.b_no} style={{ margin: '10px 0' }}>
                    <CardContent>
                        {/* <Typography variant="h6">
                            번호: {detailData.b_no}
                        </Typography> */}
                        <Typography color="textSecondary">
                            작성자: {detailData.m_id}
                        </Typography>
                        <Typography variant="body2">
                            제목: {detailData.b_title}
                        </Typography>
                        <Typography variant="body2" >
                            내용: <span dangerouslySetInnerHTML={{ __html: detailData.b_content }}></span>
                        </Typography>
                        <Typography color="textSecondary">
                            작성일: {detailData.b_reg_date}
                        </Typography>
                        <Typography color="textSecondary">
                            수정일: {detailData.b_mod_date}
                        </Typography>
                    </CardContent>
                </Card>
                : '데이터가 없습니다.'}

            <Box mt={2} mb={4}>
                <form className="App" onSubmit={handleModify}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        수정
                    </Button>

                    <Box ml={2} display="inline-block"></Box>
                    <Button
                        onClick={deleteHandler}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        삭제
                    </Button>
                </form>
            </Box>
        </div>
    );

}

export default Board_detail_form;