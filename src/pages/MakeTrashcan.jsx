import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import styled from 'styled-components';
import Container from '../components/Container';
import TextTitle from '../components/TextTitle';
import IconBox from '../components/IconBox';
import Spacer from '../components/Spacer';
import { SIZES } from '../styles/spacing';
import useRandomTrash from '../hooks/useRandomTrash';
import randombtn from '../assets/images/randomBtn.svg';

const MakeTrashcan = ({ onSelectTrash }) => {
  const navigate = useNavigate();
  const { currentImage, getNextTrash, loading, error } = useRandomTrash();
  // console.log("currentImage:", currentImage); // 이미지 URL 확인

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleClickIcon = () => {
    navigate(-1);
  }

  const handleOkClick = () => {
    if (onSelectTrash) {
      onSelectTrash(`http://${currentImage}`); //현재 이미지 넘기도록 저장
      sessionStorage.setItem('trashimage_url', `http://${currentImage}`);
    }
  };

  return (
    <Container>
      <IconBox justifyContent={"flex-start"} fontSize={"1.5rem"}>
        <IoMdArrowBack onClick={handleClickIcon} />
      </IconBox>
      <Spacer size={SIZES.LARGE} />
      {/* <Spacer size={SIZES.LARGE} /> */}
      <TextTitle>친구에게 보낼 쓸애기에요!</TextTitle>
      <Spacer size={SIZES.MEDIUM} />
      <TrashCardContainer>
        <TrashCardSend $backgroundImage={`http://${currentImage}`}>
        </TrashCardSend>
        <RandomBtn onClick={getNextTrash} src={randombtn} alt="랜덤 편지지" />
      </TrashCardContainer>
      <Spacer size={SIZES.MEDIUM} />
      <OkBtn onClick={handleOkClick} alt='확인'>확인</OkBtn>
      <Spacer size={SIZES.SLARGE} />
      <Spacer size={SIZES.LARGE} />
      <Spacer size={SIZES.LARGE} />
    </Container>
  );
};

export default MakeTrashcan;

const OkBtn = styled.button`
    width: ${({ theme }) => theme.MiddleSection};
    ${({ theme }) => theme.fixedMiddle};
    height: 2.5rem;
    color: ${({ theme }) => theme.colors.grey};
    background-color: ${({ theme }) => theme.backgroundColors.greySecond};
    border: none;
    border-radius: 0.6rem;
    font-family: 'Pretendard-Bold', sans-serif;
    font-size: 1rem;
`;

const TrashCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid ${({ theme }) => theme.colors.dark};
    border-radius: 1rem;
    width: ${({ theme }) => theme.MiddleSection};
    ${({ theme }) => theme.fixedMiddle};
    position: relative;
`;

const TrashCardSend = styled.div`
  background-image: url(${({ $backgroundImage }) => $backgroundImage || '/path/to/default/image.png'});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 1rem;
`;


const RandomBtn = styled.img`
    display: flex;
    flex-direction: column;
    width: 12%;
    cursor: pointer;
    margin-left: auto;
    position: absolute;
    bottom: 5%; 
    right: 5%;
`