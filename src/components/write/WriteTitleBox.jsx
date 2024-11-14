import React from 'react'
import styled from 'styled-components';

const WriteTitleBox = () => {

    //친구 닉네임 불러와야함

  return (
    <WriteContainer>
        <Text>두비두밥바에게 보낼 쓸애기 6.6</Text>
        <Button>쓸데없는 랜덤 주제</Button>
    </WriteContainer>
  )
}

export default WriteTitleBox

const WriteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 12px;
  background-color: #CCD3D9;
  border-radius: 13px;
  font-family: 'Pretendard-Bold', sans-serif;
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: bold;
  padding-left: 7px;
`;

const Button = styled.button`
  background-color: #30383F;
  color: #ffffff;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Pretendard-Bold', sans-serif;
`;