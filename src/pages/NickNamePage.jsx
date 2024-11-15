import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImg from '../assets/images/nickname-background.png';
import BackgroundContainer from '../components/BackgroundContainer';
import CompleteBtn from '../components/CompleteBtn';
import Title from '../components/TextTitle';
import Spacer from '../components/Spacer';
import { SIZES } from '../styles/spacing';
import TextInputLight from '../components/TextInputLight';
import TextBtnDark from '../components/TextBtnDark';

const NickNamePage = () => {
    const [nickName, setNickName] = useState("");

    const handleInputChange = (e) => {
        setNickName(e.target.value);
    };

    return (
        <BackgroundContainer backgroundImage={BackgroundImg}>
            <Title>닉네임을 설정해주세Yo.</Title>
            <Spacer size={SIZES.LARGE} />
            <TextInputLight type='text' value={nickName} onChange={handleInputChange} placeholder='일단 여기 누르면 됨' />
            <Spacer size={SIZES.SMALL} />
            <TextBtnDark text='완료' />
        </BackgroundContainer>
    );
};

export default NickNamePage;