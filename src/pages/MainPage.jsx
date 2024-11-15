import React from 'react'
import styled from 'styled-components';
import TextTitle from '../components/TextTitle';
import Container from '../components/Container';
import Spacer from '../components/Spacer';
import { SIZES } from '../styles/spacing';
import trashcanImage from '../assets/images/trashcan.png';

const MainPage = () => {
    return (
        <Container>
            <OuterLine>
                <TrashBox>
                    <Spacer size={SIZES.MEDIUM} />
                    <TextTitle>[나]의 쓸애기통</TextTitle>
                    <Spacer size={SIZES.LARGE} />
                    <TrashCan src={trashcanImage}></TrashCan>
                    <Spacer size={SIZES.MLARGE} />
                </TrashBox>
                <Footer>
                    <FooterText>쓸애기통 공유하기</FooterText>
                </Footer>
            </OuterLine>
        </Container>
    )
}

export default MainPage

const OuterLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid;
    border-radius: 2rem;
    color: ${({ theme }) => theme.backgroundColors.dark};
    box-shadow: 0.3rem 0.3rem 0.6rem ${({ theme }) => theme.backgroundColors.grey};
`

const TrashBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid;
    border-radius: 2rem;
    color: ${({ theme }) => theme.backgroundColors.dark};
    width: ${({ theme }) => theme.OuterSection};
    ${({ theme }) => theme.OuterSection};
`

const TrashCan = styled.img`
    width: ${({ theme }) => theme.MiddleSection};
    ${({ theme }) => theme.MiddleSection};
`

const Footer = styled.div` 

`;

const FooterText = styled.p`
    margin: 0;
`;