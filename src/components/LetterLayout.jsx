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
      <BackButton><BiArrowBack size={22} onClick={handleBack} /></BackButton>
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
    height: 70%;
    border: 1px solid #000000;
    background-image: url(${({ $backgroundImage }) => $backgroundImage || '/path/to/default/image.png'});
    background-position: center;
    max-width: 365px;
    height: 640px;
`
const BackButton = styled.button`
    align-self: flex-start;
    height: 16px;
    background-size: cover;
    align-self: flex-start;
    background-color : #FFFFFF;
    border: none;
    padding: 24px 34px;
    margin-bottom: 10px;
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