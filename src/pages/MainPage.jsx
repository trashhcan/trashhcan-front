import React, { useState } from 'react';
import styled from 'styled-components';
import TextTitle from '../components/TextTitle';
import Container from '../components/Container';
import Spacer from '../components/Spacer';
import { SIZES } from '../styles/spacing';
import trashcanImage from '../assets/images/trashcan.png';
import { BsGrid3X3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const MainPage = () => {
    const navigate = useNavigate();
    const [isShareModalOpen, setShareModalOpen] = useState(false);

    const handleClickIcon = () => {
        navigate("/menu")
    }

    const handleFooterClick = () => {
        // 현재 URL 가져오기
        const currentUrl = window.location.href;
        // 공유하기 로직 (모달 열기)
        console.log(`현재 URL: ${currentUrl}`);
        setShareModalOpen(true);
    };

    const closeModal = () => setShareModalOpen(false);

    return (
        <Container>
            <IconBox>
                <BsGrid3X3 onClick={handleClickIcon} />
            </IconBox>
            <Spacer size={SIZES.SMALL} />
            <OuterShadow>
                <OuterLine>
                    <TrashBox>
                        <Spacer size={SIZES.MEDIUM} />
                        <TextTitle>[나]의 쓸애기통</TextTitle>
                        <Spacer size={SIZES.LARGE} />
                        <TrashCan src={trashcanImage}></TrashCan>
                        <Spacer size={SIZES.MLARGE} />
                    </TrashBox>
                    <Footer onClick={handleFooterClick}>
                        <Spacer size={SIZES.MINIMUN} />
                        <FooterText>쓸애기통 공유하기</FooterText>
                        <Spacer size={SIZES.MINIMUN} />
                    </Footer>
                </OuterLine>

                {/* Todo: 공유 기능 구현시 수정 */}
                {isShareModalOpen && (
                    <ShareModal>
                        <ModalContent>
                            <p>쓸애기통을 공유하고 쓸애기를 받아보자!</p>
                            <UrlBox>{window.location.href}</UrlBox>
                            <ModalActions>
                                <button onClick={() => navigator.clipboard.writeText(window.location.href)}>
                                    URL 복사
                                </button>
                                <button onClick={closeModal}>닫기</button>
                            </ModalActions>
                        </ModalContent>
                    </ShareModal>
                )}
            </OuterShadow>
            <Spacer size={SIZES.LARGE} />
        </Container>
    );
};

export default MainPage;

const IconBox = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 2rem;
    width: ${({ theme }) => theme.OuterSection};
    ${({ theme }) => theme.fixedOuter};
`

const OuterShadow = styled.div`
    border-radius: 2rem;
    box-shadow: 0.3rem 0.3rem 0.6rem ${({ theme }) => theme.backgroundColors.grey};
`

const OuterLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.05rem solid;
    border-radius: 2rem;
    color: ${({ theme }) => theme.backgroundColors.dark};
    box-shadow: inset 0 0 0 0.05rem ${({ theme }) => theme.backgroundColors.dark}; 
`;

const TrashBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid ${({ theme }) => theme.backgroundColors.dark};
    border-bottom: 0.105rem solid ${({ theme }) => theme.backgroundColors.dark};
    border-radius: 2rem;
    color: ${({ theme }) => theme.backgroundColors.dark};
    width: ${({ theme }) => theme.OuterSection};
    ${({ theme }) => theme.fixedOuter};
`;

const TrashCan = styled.img`
    width: ${({ theme }) => theme.MiddleSection};
    ${({ theme }) => theme.fixedMiddle};
`;

const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

const FooterText = styled.p`
    font-family: 'Pretendard-Medium';
    font-size: 1.2rem;
`;

const ShareModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
`;

const UrlBox = styled.div`
    margin: 1rem 0;
    padding: 0.5rem;
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 0.9rem;
`;

const ModalActions = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;

    button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;

        &:hover {
            background: #ddd;
        }
    }
`;
