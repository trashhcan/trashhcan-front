import React from 'react';
import styled from 'styled-components';

const WriteTitleBox = ({ onToggleSubject, isSubjectVisible }) => {

    //친구 닉네임 불러와야함

  return (
    <WriteContainer>
      <Text>두비두밥바에게 보낼 쓸애기 6.6</Text>
      <Button $isSubjectVisible={isSubjectVisible} onClick={onToggleSubject}>
        {isSubjectVisible ? '주제버리기' : '쓸데없는 랜덤 주제'}
      </Button>
    </WriteContainer>
  );
};

export default WriteTitleBox;

const WriteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.OuterSection};
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.backgroundColors.grey};
  border-radius: 13px;
  font-family: 'Pretendard-Bold', sans-serif;
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: bold;
  padding-left: 7px;
`;

const Button = styled.button.attrs(({ $isSubjectVisible }) => ({}))`
  background-color: ${({ $isSubjectVisible, theme }) =>
    $isSubjectVisible ? theme.backgroundColors.light : theme.backgroundColors.dark};
  color: ${({ $isSubjectVisible, theme }) =>
    $isSubjectVisible ? theme.backgroundColors.dark : theme.backgroundColors.light};
  border: ${({ $isSubjectVisible, theme }) =>
    $isSubjectVisible ? `1px solid ${theme.backgroundColors.dark}` : 'none'};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Pretendard-Bold', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
`;
