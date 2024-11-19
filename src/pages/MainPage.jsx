import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuMenu } from "react-icons/lu";
import styled from 'styled-components';
import { SIZES } from '../styles/spacing';
import Spacer from '../components/Spacer';
import TextTitle from '../components/TextTitle';
import Container from '../components/Container';
import IconBox from '../components/IconBox';
import TrashCanContainer from '../components/TrashCanContainer';

const MainPage = () => {
    const navigate = useNavigate();
    const [boxName, setBoxName] = useState('');
    const [isShareModalOpen, setShareModalOpen] = useState(false);
    const [shareUrl, setShareUrl] = useState('');

    useEffect(() => {
        const vId = localStorage.getItem('v_id');
        // console.log(vId);
        if (vId) {
            navigate(`/member/${vId}`);
        }

        const memberId = localStorage.getItem('member_id');
        const storedBoxName = localStorage.getItem('box_name');
        const originalUrl = window.location.origin;

        if (storedBoxName) {

            setBoxName(storedBoxName);
        }

        if (memberId) {
            setShareUrl(`${originalUrl}/member/${memberId}`); // URL에 member_id 붙이기
        } else {
            alert("공유하기 실패: 정의되지 않은 사용자입니다.");
        }
    }, []);

    const handleClickIcon = () => {
        navigate("/menu")
    }

    const handleFooterClick = () => {
        // console.log(`공유할 URL: ${shareUrl}`);
        setShareModalOpen(true);
    };

    const closeModal = () => setShareModalOpen(false);

    return (
        <Container>
            <Spacer size={SIZES.SLARGE} />
            <IconBox justifyContent={"flex-end"}>
                <LuMenu onClick={handleClickIcon} />
            </IconBox>
            <Spacer size={SIZES.SMALL} />
            <OuterShadow>
                <OuterLine>
                    <TrashBox>
                        <Spacer size={SIZES.MEDIUM} />
                        <TextTitle>{boxName}의 쓸애기통</TextTitle>
                        <Spacer size={SIZES.LARGE} />
                        {/* <TrashCan src={trashcanImage}></TrashCan> */}
                        <TrashCanContainer />
                        <Spacer size={SIZES.SLARGE} />
                    </TrashBox>
                    <Footer onClick={handleFooterClick}>
                        <FooterText>쓸애기통 공유하기</FooterText>
                    </Footer>
                </OuterLine>

                {/* Todo: 공유 기능 구현시 수정 */}
                {isShareModalOpen && (
                    <ShareModal>
                        <ModalContent>
                            <p>쓸애기통을 공유하고 쓸애기를 받아보자!</p>
                            <UrlBox>{shareUrl}</UrlBox>
                            <ModalActions>
                                <button onClick={() => navigator.clipboard.writeText(shareUrl)}>
                                    URL 복사
                                </button>
                                <button onClick={closeModal}>닫기</button>
                            </ModalActions>
                        </ModalContent>
                    </ShareModal>
                )}
            </OuterShadow>
            <Spacer size={SIZES.SLARGE} />
        </Container>
    );
};

export default MainPage;

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
    border: 0.05rem solid ${({ theme }) => theme.backgroundColors.dark};
    border-bottom: 0.105rem solid ${({ theme }) => theme.backgroundColors.dark};
    border-radius: 2rem;
    color: ${({ theme }) => theme.backgroundColors.dark};
    width: ${({ theme }) => theme.OuterSection};
    ${({ theme }) => theme.fixedOuter};
`;

// const TrashCan = styled.img`
//     width: ${({ theme }) => theme.MidOutSection};
//     ${({ theme }) => theme.fixedMidOut};
// `;

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
    font-size: 0.9rem;
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
