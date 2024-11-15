import React from 'react'
import LetterLayout from '../components/LetterLayout'
import back from '../assets/images/backbutton.png';
import ChoiceTitleBox from '../components/write/ChoiceTitleBox';
import randombtn from '../assets/images/randomBtn.svg';
import styled from 'styled-components';

const ChoiceLetter = () => {
  return (
    <LetterLayout titleComponent={<ChoiceTitleBox />}>
      <ChoiceLayout>
        <RandomBtn src={randombtn} alt="랜덤 편지지" />
        <OkBtn alt='확인'>확인</OkBtn>
      </ChoiceLayout>
    </LetterLayout>
  )
}

export default ChoiceLetter;

const ChoiceLayout = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    gap: 20px;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);

`

const RandomBtn = styled.img`
    width: 54px;
    height: 54px;
    cursor: pointer;

`
const OkBtn = styled.button`
    width :242px;
    height: 43px;
    background-color: #616E7A;
    border: none;
    border-radius: 13px;
    color : #FFFFFF;
    font-family: 'Pretendard-Bold', sans-serif;
    font-size: 18px;
`