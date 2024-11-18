import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginBtn = ({ onClick }) => {
    return (
        <Container>
            <Button onClick={onClick}>
                <Icon />
                <Text>Google 계정으로 로그인</Text>
            </Button>
        </Container>
    );
};

export default GoogleLoginBtn;

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
  background-color: #ffffff; /* Google 버튼 기본 흰색 배경 */
  border: 1px solid #dcdcdc; /* 연한 테두리 */
  border-radius: 4px; /* 약간 둥근 모서리 */
  padding: 12px 24px; /* 적당한 내부 여백 */
  width: 100%;
  cursor: pointer;
  font-size: 16px; /* 적당한 크기 */
  color: #3c4043; /* Google 권장 텍스트 색상 */
  font-weight: 500;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #f7f8fa; /* Google 버튼 hover 시 연한 회색 */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* 약간의 그림자 */
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 4px rgba(66, 133, 244, 0.3); /* Google의 파란색 포커스 효과 */
  }
`;

const Icon = styled(FcGoogle)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const Text = styled.span`
  font-weight: 500;
  color: #3c4043; /* Google 권장 텍스트 색상 */
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  text-align: center;
`;
