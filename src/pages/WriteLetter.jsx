import React, { useState } from 'react'
import LetterLayout from '../components/LetterLayout'
import WriteTitleBox from '../components/write/WriteTitleBox'
import WriteContent from '../components/write/WriteContent'
import DiscardButton from '../components/write/DiscardButton';
import styled from 'styled-components';
import useRandomSubject from '../hooks/useRandomSubject';
import RandomTitle from '../components/write/RandomTitle';

const WriteLetter = ({ selectedImage }) => {
  const { isSubjectVisible, subject, toggleSubject, error } = useRandomSubject();//랜덤주제
  const [content, setContent] = useState(''); //편지내용 관리


  const handleContentChange = (e) => {
    setContent(e.target.value); //편지내용상태
  };

  const handleDiscard = async () => {
    try {
      const senderId = "123"; //실제 sender_id 설정 필요
      const letterData = {
        letterbox_id: 1, //실제 데이터로 교체 필요
        content,
        letterimage_url: selectedImage,
        trashimage_url: "url.com",
        letter_theme: isSubjectVisible ? subject : null,
      };

      const response = await submitLetter(senderId, letterData);
      console.log("Letter submitted successfully:", response);
      alert("편지가 성공적으로 제출되었습니다!");
    } catch (error) {
      console.error("Error during submission:", error.message);
      alert("편지 제출 중 문제가 발생했습니다.");
    }
  };


  return (
    <LetterLayout
      titleComponent={
        <WriteTitleBox
          onToggleSubject={toggleSubject} // toggleSubject 전달
          isSubjectVisible={isSubjectVisible} // isSubjectVisible 전달
        />
      }
      backgroundImage={selectedImage}
    >
      <ContentWrapper>
        {isSubjectVisible && <RandomTitle subject={subject} />}
        <WriteContent onChange={handleContentChange} isSubjectVisible={isSubjectVisible} />
        <ButtonWrapper>
          <DiscardButton onClick={handleDiscard} />
        </ButtonWrapper>
      </ContentWrapper>

    </LetterLayout>
  )
}

export default WriteLetter

const ContentWrapper = styled.div`
    width: ${({ theme }) => theme.OuterSection};
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: auto; 버튼을 하단 고정 */
`