import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getLetterBoxByMemberId } from '../api/letterApi';
import Spacer from '../components/Spacer';
import { SIZES } from '../styles/spacing';
import TextTitle from '../components/TextTitle';
import Container from '../components/Container';
import trashcanImage from '../assets/images/trashcan_nokki.png';
import { IoMdAddCircle } from "react-icons/io";
import IconBox from '../components/IconBox';

const VisitorPage = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // 동적 경로에서 id 추출
    const [visitorData, setVisitorData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getLetterBoxByMemberId(id);
                if (!response) { // 인증 실패 또는 데이터 없음 → 로그인 페이지로 리다이렉트
                    navigate("/");
                } else { // 데이터가 있으면 상태 업데이트
                    setVisitorData(response);
                }
            } catch (error) {
                console.error('[ERROR] VisitorPage fetchData:', error.message);
            }
        };

        fetchData();
    }, [id, navigate]);

    const handleSendLetter = () => {
        navigate("/")
    }

    return (
        <>
            {visitorData ? (
                <Container>
                    <ButtonContainer>
                        <SmallButton>내 쓸애기통 이동</SmallButton>
                    </ButtonContainer>
                    <Spacer size={SIZES.SMALL} />
                    <TrashBox>
                        <Spacer size={SIZES.MEDIUM} />
                        <TextTitle>[너]의 쓸애기통</TextTitle>
                        <Spacer size={SIZES.LARGE} />
                        <TrashCan src={trashcanImage}></TrashCan>
                        <Spacer size={SIZES.MEDIUM} />
                        <IconBox fontSize={'3rem'}><IoMdAddCircle /></IconBox>
                        <Spacer size={SIZES.SMALL} />
                    </TrashBox>
                </Container>
            ) : (
                <p>방문자 쓰레기통 조회에 실패했습니다!...</p>
            )}
        </>
    );
};

export default VisitorPage;

const TrashBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid;
    border-bottom: 0.105rem solid ${({ theme }) => theme.backgroundColors.dark};
    border-radius: 2rem;
    box-shadow: 0.3rem 0.3rem 0.6rem ${({ theme }) => theme.backgroundColors.grey};
    
    color: ${({ theme }) => theme.backgroundColors.dark};
    width: ${({ theme }) => theme.OuterSection};
    ${({ theme }) => theme.fixedOuter};
`;

const TrashCan = styled.img`
    width: ${({ theme }) => theme.MidOutSection};
    ${({ theme }) => theme.fixedMidOut};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: ${({ theme }) => theme.OuterSection};
    ${({ theme }) => theme.fixedOuter};
`;

const SmallButton = styled.button`
    font-family: 'Pretendard-Bold';
    font-size: 0.8rem;

    background-color: ${({ theme }) => theme.backgroundColors.light};
    border: 0.1rem solid ${({ theme }) => theme.backgroundColors.dark};
    border-radius: 0.5rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    width: 30%;
`;