import React from 'react'
import styled from 'styled-components'
import TextTitle from '../components/TextTitle'
import Container from '../components/Container'
import { IoMdArrowBack } from "react-icons/io";
import TrashCard from '../components/TrashCard';
import { SIZES } from '../styles/spacing';
import Spacer from '../components/Spacer';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <Container>
            <Spacer size={SIZES.MLARGE} />
            <TitleContainer>
                <Icon>
                    <IoMdArrowBack onClick={handleGoBack} />
                </Icon>
                <TextTitle>내가 두고 온 쓸애기들</TextTitle>
                <EmptyBox></EmptyBox>
            </TitleContainer>
            <Spacer size={SIZES.LARGE} />
            { /* Todo: 자연스러운 스크롤 효과 추가하기 */}
            <TrashBox>
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
                <TrashCard />
            </TrashBox>
        </Container>
    )
}

export default MenuPage

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${({ theme }) => theme.OuterSection};
    ${({ theme }) => theme.fixedOuter};

`
const Icon = styled.div`
    display: flex;
    flex-direction: start;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`

const EmptyBox = styled.div`
    width: 2rem;
`

const TrashBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 1rem;
    width: ${({ theme }) => theme.OuterSection};
    ${({ theme }) => theme.fixedOuter};
    overflow-y: auto;
    padding: 1rem;
    
`