import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImg from '../assets/images/login-background.png';
import BackgroundContainer from '../components/BackgroundContainer';
import CompleteBtn from '../components/CompleteBtn';

const NickNamePage = () => {
    const [nickName, setNickName] = useState("");

    const handleInputChange = (e) => {
        setNickName(e.target.value);
    };

    return (
        <BackgroundContainer backgroundImage={BackgroundImg}>
            <Title>닉네임을 설정해주세Yo.</Title>
            <TextInputField type='text' value={nickName} onChange={handleInputChange} placeholder='일단 여기 누르면 됨' />
            <CompleteBtn text='완료' />
        </BackgroundContainer>
    );
};

export default NickNamePage;

const Title = styled.div`
`

const TextInputField = styled.input`
    width: ${({ theme }) => theme.MiddleSection};
    ${({ theme }) => theme.fixedMiddle};
`