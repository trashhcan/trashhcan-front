import React, { Children } from 'react'
import ping from '../assets/images/ping.png';
import styled from 'styled-components';
import back from '../assets/images/back.svg';
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const LetterLayout = ({ titleComponent, children, backgroundImage }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <LetterWrapper>
      <BackButton><BiArrowBack size={20} onClick={handleBack} /></BackButton>
      <TitleContainer>
        {titleComponent}
      </TitleContainer>
      <LetterBox $backgroundImage={backgroundImage}>
        {children}
      </LetterBox>
    </LetterWrapper>
  )
}

export default LetterLayout;

//전체 페이지
const LetterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
`
const LetterBox = styled.div`
    display: flex;
    /* width: 95%; */
    width: ${({ theme }) => theme.OuterSection};
    height: 75%;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    background-image: url(${({ $backgroundImage }) => $backgroundImage || '/path/to/default/image.png'});
    background-position: center;
    max-width: 365px;
    height: 640px;
`
const BackButton = styled.button`
    display: flex;
    align-self: flex-start;
    height: 16px;
    background-size: cover;
    align-self: flex-start;
    background-color : #FFFFFF;
    border: none;
    padding: 1.5rem ;
    margin-bottom: 10px;
    width: ${({ theme }) => theme.OuterTopSection};
`
const TitleContainer = styled.div`
    width: ${({ theme }) => theme.OuterSection};
    max-width: 365px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`