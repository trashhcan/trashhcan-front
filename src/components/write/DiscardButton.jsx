//쓸애기버리기 버튼
import React from 'react';
import styled from 'styled-components';

const DiscardButton = ({ onClick }) => {
    //클릭 시 편지 내용, 편지지 백에게 전달 필요
    //완성 창 띄웠다가 홈으로
  return (
      <StyledButton onClick={onClick}>
        쓸애기 버리기
      </StyledButton>
  );
};

export default DiscardButton;

const StyledButton = styled.button`
  width: 163px;
  height: 30px;
  background-color: ${({ theme }) => theme.backgroundColors.light};
  color: ${({ theme }) => theme.backgroundColors.dark};
  border-color: ${({ theme }) => theme.backgroundColors.dark};
  border : solid 1px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  font-family: 'Pretendard-Bold', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;
