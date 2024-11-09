import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//카카오로그인 버튼을 통해 바로 로그인 할 수 있도록.
const K_REST_API_KEY = import.meta.env.VITE_APP_K_REST_API_KEY;
const K_REDIRECT_URI = import.meta.env.VITE_APP_K_REDIRECT_URI;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

const MainPage = () => {
    const navigate = useNavigate();

    const googleLoginHandler = () => {
        navigate('/googleloginpage');
    }
    const kakaoLoginHandler = () => {
        // navigate('/kakaologinpage'); //다른 페이지로 넘어가는게 아닌 메인에서 로그인 바로 진행
        window.location.href = kakaoURL;
    }
    return (
        <Buttons>
            <Button onClick={kakaoLoginHandler}>카카오 로그인</Button>
            <Button onClick={googleLoginHandler}>구글 로그인</Button>
        </Buttons>
    );
};

export default MainPage;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`

const Button = styled.button`
    padding: 0.5rem;
`