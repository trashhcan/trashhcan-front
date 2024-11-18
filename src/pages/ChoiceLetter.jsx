import React from 'react'
import LetterLayout from '../components/LetterLayout'
import back from '../assets/images/backbutton.png';
import ChoiceTitleBox from '../components/write/ChoiceTitleBox';
import randombtn from '../assets/images/randomBtn.svg';
import styled from 'styled-components';
import useRandomImg from '../hooks/useRandomImg';

const ChoiceLetter = ({ onSelectImage }) => {
    //useRandomImg에서 이미지리스트 가져오기
    const { currentImage, getNextImage, loading, error } = useRandomImg();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleOkClick = () => {
        if (onSelectImage) {
         onSelectImage(`http://${currentImage}`); //현재이미지넘기도록저장
        }
    };

  return (
    <LetterLayout
      titleComponent={<ChoiceTitleBox />}
      backgroundImage={`http://${currentImage}`} //배경 이미지 설정
    >
      <ChoiceLayout>
        <RandomBtn onClick={getNextImage} src={randombtn} alt="랜덤 편지지" />
        <OkBtn onClick={handleOkClick} alt='확인'>확인</OkBtn>
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