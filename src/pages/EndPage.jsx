import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import TextTitle from '../components/TextTitle';

const EndPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/mainpage'); // 3초 후 /mainpage로 이동
        }, 3000);

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
    }, [navigate]);

    return (
        <Container>
            <TextTitle fontFamily='Pretendard-Bold'>쓸애기 전달 완료 ദ്ദി・ᴗ・)✧</TextTitle>
        </Container>
    );
};

export default EndPage;
