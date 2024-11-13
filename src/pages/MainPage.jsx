import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GoogleLoginButton from '../components/GoogleLoginButton';

//카카오로그인 버튼을 통해 바로 로그인 할 수 있도록.
const K_REST_API_KEY = import.meta.env.VITE_APP_K_REST_API_KEY;
const K_REDIRECT_URI = import.meta.env.VITE_APP_K_REDIRECT_URI;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

const G_CLIENT_ID = import.meta.env.VITE_APP_G_CLIENT_ID;
const G_REDIRECT_URI = import.meta.env.VITE_APP_G_REDIRECT_URI;
const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${G_CLIENT_ID}
		&redirect_uri=${G_REDIRECT_URI}
		&response_type=code
		&scope=email profile`;

const MainPage = () => {
    const navigate = useNavigate();

    const googleLoginHandler = () => {
        navigate('/googleloginpage');
    }
    const kakaoLoginHandler = () => {
        // navigate('/kakaologinpage'); //다른 페이지로 넘어가는게 아닌 메인에서 로그인 바로 진행
        window.location.href = kakaoURL;
    }

    const googleLoginHandlerServer = () => {
        window.location.href = googleURL;
    }
    return (
        <Container>
            <Logo />
            <Title>내쓰통</Title>
            <Buttons>
                <Button onClick={kakaoLoginHandler}>카카오 로그인</Button>
                <GoogleLoginButton onClick={googleLoginHandler}>구글 로그인</GoogleLoginButton>
                <Button onClick={googleLoginHandlerServer}>구글 로그인(서버)</Button>
            </Buttons>
        </Container>
    );
};

export default MainPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-image: url('src/assets/images/login-background.png');
`

const Logo = styled.img.attrs({
    src: 'src/assets/images/logo.png',
    alt: 'Logo'
})`
    width: ${({ theme }) => theme.InnerSection}; 
`;

const Title = styled.div`
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    padding: 0.5rem;
    width: ${({ theme }) => theme.MiddleSection};
`