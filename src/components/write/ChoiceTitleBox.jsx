import React from 'react'
import styled from 'styled-components';

const ChoiceTitleBox = () => {
  return (
    <ChoiceTitle>친구에게 보낼 편지지에요!</ChoiceTitle>
  )
}

export default ChoiceTitleBox;

const ChoiceTitle = styled.div`
  font-size: 22px;
  background-color: ${({theme}) => theme.backgroundColors.light};
  text-align: center;
  font-family: 'Pretendard-SemiBold', sans-serif;
`;