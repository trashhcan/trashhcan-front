import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import TextTitle from '../components/TextTitle';

const EndPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const v_member_id = sessionStorage.getItem('v_member_id');
        const timer = setTimeout(() => {
            navigate(`/member/${v_member_id}`); // 2.5초 후 상대 쓸애기통으로 이동
        }, 2500);

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
    }, [navigate]);

    return (
        <Container>
            <TextTitle fontFamily='Pretendard-Bold'>쓸애기 전달 완료 ദ്ദി・ᴗ・)✧</TextTitle>
        </Container>
    );
};

export default EndPage;
