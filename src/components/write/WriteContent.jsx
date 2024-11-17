//편지작성텍스트입력
import React from 'react';
import styled from 'styled-components';

const WriteContent = ({ onChange, isSubjectVisible }) => {
  return (
      <StyledTextArea
        onChange={onChange} minLength="5" maxLength="100" isSubjectVisible={isSubjectVisible}>

        </StyledTextArea>
      
  );
};

export default WriteContent;

const StyledTextArea = styled.textarea`
  width: 83%; //텍스트입력칸 여기가 딱인듯
  height:  ${({ isSubjectVisible }) => (isSubjectVisible ? '70%' : '75%')};
  border: none;
  padding: 30px;
  font-size: 35px;
  line-height: 1.5; //줄간격..디자인한테 다시 묻기
  font-family: 'HSSantokki-Regular', sans-serif;
  background: none;
  color: ${({ theme }) => theme.backgroundColors.dark};
  margin-bottom: 5%;
  outline: none;
`
