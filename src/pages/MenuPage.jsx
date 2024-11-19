import React, { useEffect, useState } from 'react'; // useState와 useEffect를 추가로 import합니다.
import styled from 'styled-components';
import TextTitle from '../components/TextTitle';
import Container from '../components/Container';
import { IoMdArrowBack } from "react-icons/io";
import TrashCard from '../components/TrashCard';
import { SIZES } from '../styles/spacing';
import Spacer from '../components/Spacer';
import { useNavigate } from 'react-router-dom';
import { getMyWriteLetters } from '../api/myWriteApi'; // API 호출 파일

const MenuPage = () => {
    const navigate = useNavigate();
    const [letters, setLetters] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchLetters = async () => {
            setLoading(true);
            setError(null);
            try {
                const memberId = sessionStorage.getItem('member_id'); // 사용자 ID
                const data = await getMyWriteLetters(memberId);
                setLetters(data);
            } catch (err) {
                setError('내가 작성한 쓸애기를 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchLetters();
    }, []);

    if (loading) return <LoadingText>로딩 중...</LoadingText>;
    if (error) return <ErrorText>{error}</ErrorText>;

    return (
        <Container>
            <Spacer size={SIZES.LARGE} />
            {/* <Spacer size={SIZES.LARGE} />
            <Spacer size={SIZES.MINIMUN} /> */}
            <TitleContainer>
                <Icon>
                    <IoMdArrowBack onClick={handleGoBack} />
                </Icon>
                <TextTitle>내가 두고 온 쓸애기들</TextTitle>
                <EmptyBox></EmptyBox>
            </TitleContainer>
            <Spacer size={SIZES.MEDIUM} />
            {loading ? (
                <LoadingText>로딩 중...</LoadingText>
            ) : error ? (
                <ErrorText>{error}</ErrorText>
            ) : letters.length === 0 ? (
                <EmptyState>내가 두고 온 쓸애기가 없습니다.</EmptyState>
            ) : (
                <TrashBox>
                    {letters.map((letter) => (
                        <TrashCard
                            key={letter.id}
                            imageUrl={letter.trashimage_url}
                            content={letter.content}
                        />
                    ))}
                </TrashBox>
            )}
        </Container>
    );
};

export default MenuPage;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${({ theme }) => theme.OuterSection};
    ${({ theme }) => theme.fixedOuter};
    position: sticky;
    top: 0;
`;

const Icon = styled.div`
    display: flex;
    flex-direction: start;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
`;

const EmptyBox = styled.div`
    width: 1.8rem;
`;

const TrashBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 1rem;
    width: ${({ theme }) => theme.OuterSection};
    ${({ theme }) => theme.fixedOuter};
    overflow-y: auto;
    padding: 1rem;
`;

const LoadingText = styled.div`
    text-align: center;
    font-size: 1.2rem;
`;

const ErrorText = styled.div`
    text-align: center;
    font-size: 1.2rem;
    color: red;
`;

const EmptyState = styled.div`
    text-align: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 20px;
`;

