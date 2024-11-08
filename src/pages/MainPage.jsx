import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainPage = () => {
    const navigate = useNavigate();

    const googleLoginHandler = () => {
        navigate('/googleloginpage');
    }
    return (
        <Buttons>
            <Button>카카오 로그인</Button>
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