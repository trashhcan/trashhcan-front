import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GoogleLoginButton from '../components/GoogleLoginButton';
import Spacer from '../components/Spacer';
import { SIZES } from '../styles/spacing';
import BackgroundContainer from '../components/BackgroundContainer';
import BackgroundImg from '../assets/images/login-background.png';
import logoImg from '../assets/images/logo.png';
import KakaoButtonImg from '../assets/images/kakao_login_large_narrow.png'
import GoogleLoginBtn from '../components/GoogleLoginBtn';
import KakaoLoginBtn from '../components/KakaoLoginBtn';

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

const InitialPage = () => {
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
        <BackgroundContainer backgroundImage={BackgroundImg}>
            <LogoContainer>
                <Spacer size={SIZES.XLARGE} />
                <Logo />
                <Spacer size={SIZES.MINIMUN} />
                <Title>내쓰통</Title>
            </LogoContainer>
            <Spacer size={SIZES.MEDIUM} />
            <Buttons>
                <KakaoLoginBtn onClick={kakaoLoginHandler} />
                <Spacer size={SIZES.MINIMUN} />
                <GoogleLoginBtn onClick={googleLoginHandlerServer} />
                <Spacer size={SIZES.MINIMUN} />
                {/* 프론트 단독 구글 로그인 버튼
                <GoogleLoginButton onClick={googleLoginHandler}>구글 로그인</GoogleLoginButton>
                <Spacer size={SIZES.MINIMUN} /> */}
                <TextContainer>
                    <Text>쓸데 없는 편지 쓰러 가</Text>
                    <InnerText>(메롱바보)</InnerText>
                    <Text>보아요.</Text>
                </TextContainer>
            </Buttons>
        </BackgroundContainer>
    );
};

export default InitialPage;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => theme.InnerSection}; 
    ${({ theme }) => theme.fixedInner};
`

const Logo = styled.img.attrs({
    src: logoImg,
    alt: 'Logo'
})`
    width: 100%;
`;

const Title = styled.div`
    display: flex;
    font-family: 'HSSantokki-Regular';
    font-size: calc(${({ theme }) => theme.InnerSection} * 0.4); 
    ${({ theme }) => theme.fixedFontSize};
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`;


const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => theme.MiddleSection};
    ${({ theme }) => theme.fixedMiddle};
    
`;

const Button = styled.button`
    padding: 0.5rem;
    width: 100%;
`

const KakaoButton = styled.img.attrs({
    src: KakaoButtonImg,
    alt: '카카오 로그인 버튼',
})`
    width: 100%;
    cursor: pointer;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.15rem;
    width: ${({ theme }) => theme.MiddleSection};
    ${({ theme }) => theme.fixedMiddle};
    color: ${({ theme }) => theme.backgroundColors.dark};
    background:  ${({ theme }) => theme.backgroundColors.light}; 
    box-shadow : 0 0 1rem 0.5rem ${({ theme }) => theme.backgroundColors.light}; 
`

const Text = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-family: 'Pretendard-SemiBold';
    text-align: center;
`

const InnerText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
    font-family: 'Pretendard-SemiBold';
    text-align: center;
`