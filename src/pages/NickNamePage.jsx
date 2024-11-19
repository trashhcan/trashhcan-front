import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundImg from '../assets/images/nickname-background.png';
import BackgroundContainer from '../components/BackgroundContainer';
import CompleteBtn from '../components/CompleteBtn';
import Title from '../components/TextTitle';
import Spacer from '../components/Spacer';
import { SIZES } from '../styles/spacing';
import TextInputLight from '../components/TextInputLight';
import TextBtnDark from '../components/TextBtnDark';
import { postBoxName } from '../api/loginAPIs';
import { useNavigate } from 'react-router-dom';

const NickNamePage = () => {
    // Todo: Seperate to hooks
    const navigate = useNavigate();
    const [boxName, setBoxName] = useState("");
    const [memberId, setMemberId] = useState();

    useEffect(() => {
        setMemberId(Number(localStorage.getItem('member_id')));
        console.log(memberId)
    }, [])

    const handleInput = (e) => {
        setBoxName(e.target.value);
    };

    const handleBoxName = async () => {
        // 유효성 검사
        if (!handleValidate(boxName)) {
            return;
        }

        const payload = {
            member_id: memberId,
            box_name: boxName,
        }

        console.log(payload)

        try {
            const response = await postBoxName(payload);
            localStorage.setItem('letterbox_id', response);
            console.log('닉네임 설정 성공, Response:', response);
            navigate("/mainpage");
        } catch (error) {
            console.error('닉네임 설정 실패:', error);
            alert('닉네임 설정 중 오류가 발생했습니다.');
        }
    };

    const handleValidate = (boxName) => {
        if (!boxName.trim()) {
            alert('닉네임을 입력해주세요.');
            return false;
        }
        return true;
    }

    return (
        <BackgroundContainer backgroundImage={BackgroundImg}>
            <Title>닉네임을 설정해주세Yo.</Title>
            <Spacer size={SIZES.LARGE} />
            <TextInputLight type='text' value={boxName} onChange={handleInput} placeholder='일단 여기 누르면 됨' />
            <Spacer size={SIZES.SMALL} />
            <TextBtnDark text='완료' onClick={handleBoxName} />
        </BackgroundContainer>
    );
};

export default NickNamePage;