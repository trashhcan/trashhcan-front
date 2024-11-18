import React from "react";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri"; // 카카오톡 아이콘 사용

const KakaoLoginBtn = ({ onClick }) => {
    return (
        <Container>
            <Button onClick={onClick}>
                <Icon />
                <Text>카카오 로그인</Text>
            </Button>
        </Container>
    );
};

export default KakaoLoginBtn;

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fee500; /* 카카오 버튼 기본 노란색 배경 */
  border: none; /* 테두리 없음 */
  border-radius: 4px; /* 약간 둥근 모서리 */
  padding: 12px 24px; /* 적당한 내부 여백 */
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
  color: #000000; /* 검정색 텍스트 */
  font-weight: 500;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #ffd600; /* Hover 시 더 진한 노란색 */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* 약간의 그림자 */
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 4px rgba(255, 214, 0, 0.3); /* 포커스 효과 */
  }
`;

const Icon = styled(RiKakaoTalkFill)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: #000000; /* 아이콘 색상 검정 */
`;

const Text = styled.span`
  font-weight: 500;
  color: #000000; /* 검정색 텍스트 */
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  text-align: center;
`;
