import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import LetterLayout from '../components/LetterLayout';
import { fetchLetterDetails } from '../api/trashApi';
import RandomTitle from '../components/write/RandomTitle';

const LetterDetails = () => {
    const { letter_id } = useParams();
    const [letterDetails, setLetterDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getLetterData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchLetterDetails(letter_id);
                setLetterDetails(data);
            } catch (err) {
                setError('편지 데이터를 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };
        getLetterData();
    }, [letter_id]);

    if (loading) return <LoadingText>로딩 중...</LoadingText>;
    if (error) return <ErrorText>{error}</ErrorText>;
    if (!letterDetails) return null;

    return (
        <LetterLayout
            titleComponent={<Title>{letterDetails.sender_box_name}(이)가 두고 간 쓸애기 &gt;3&lt;</Title>}
            backgroundImage={letterDetails.letterimage_url}
        >
            <ContentWrapper>
                {letterDetails.letter_theme && (
                    <RandomTitle subject={letterDetails.letter_theme} />
                )}
                <ContentText>{letterDetails.content}</ContentText>
            </ContentWrapper>
        </LetterLayout>
    );
};

export default LetterDetails;

const Title = styled.h1`
    font-size: 14px;
    font-family: 'Pretendard-Medium', sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    padding: 8px 12px;
    background-color: ${({ theme }) => theme.backgroundColors.grey};
    border-radius: 13px;
    margin:  auto;
    width: ${({ theme }) => theme.OuterSection};
`;

const ContentWrapper = styled.div`
    width: ${({ theme }) => theme.OuterSection};
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: column;
    align-items: center; /* 중앙 정렬 */
    margin-top: 10%;
`;


const ContentText = styled.p`
    width: 83%;
    height:  ${({ isSubjectVisible }) => (isSubjectVisible ? '70%' : '75%')};
    border: none;
    padding: 30px;
    font-size: 35px;
    line-height: 1.5;
    font-family: 'HSSantokki-Regular', sans-serif;
    background: none;
    color: ${({ theme }) => theme.backgroundColors.dark};
    margin-bottom: 5%;
    outline: none;
`;

const LoadingText = styled.div`
    text-align: center;
    font-size: 1.2rem;
    margin-top: 50px;
`;

const ErrorText = styled.div`
    text-align: center;
    font-size: 1.2rem;
    color: red;
    margin-top: 50px;
`;