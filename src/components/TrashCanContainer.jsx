//쓸애기통 렌더링
//슬라이드?옆으로 9개부터 표현하게도 필요함
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TrashItem from './TrashItem';
import { getTrashData } from '../api/trashcanApi';
import trashImage from '../assets/images/trashcan_nokki.png';
import leftArrow from '../assets/images/a.png';
import rightArrow from '../assets/images/a.png';

const TrashCanContainer = ({memberId}) => {
    const [trashItems, setTrashItems] = useState([]); //쓰레기 데이터
    const [currentPage, setCurrentPage] = useState(0); //현재 페이지
    const [loading, setLoading] = useState(true); //로딩 상태
    const [error, setError] = useState(null); //에러 상태

    const trashCoordinates = [
        { top: '62%', left: '28%',width: '22%' },
        { top: '66%', left: '48%',width: '20%'},
        { top: '46%', left: '28%' ,width: '19%'},
        { top: '45%', left: '47%' ,width: '22%'},
        { top: '24%', left: '29%' ,width: '24%'},
        { top: '27%', left: '51%' ,width: '19%'},
        { top: '10%', left: '26%' ,width: '18%'},
        { top: '68%', left: '71%' ,width: '19%'},
    ];

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                // const memberId = localStorage.getItem('member_id'); //내계정에서멤버아이디다옴
                // const data = await getTrashData(memberId);
                const effectiveMemberId = memberId || localStorage.getItem('member_id');
                if (!effectiveMemberId) {
                    throw new Error('Member ID가 정의되지 않았습니다.');
                }
                const data = await getTrashData(effectiveMemberId);
                // console.log('API Response:', data);//확인용ok
                setTrashItems(data.letters || []); //데이터가 없음 빈배열로 처리
            } catch (err) {
                setError('쓰레기 데이터를 불러오는 데 실패했습니다.');
                setTrashItems([]); //에러 발생 빈배열로 설정
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [memberId]);

    const handlePageChange = (direction) => {
        if (direction === 'next' && (currentPage + 1) * 8 < trashItems.length) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentTrashItems = Array.isArray(trashItems)
        ? trashItems.slice(currentPage * 8, (currentPage + 1) * 8)
        : [];

    // 에러 발생 시 처리
    if (loading) return null;
    if (error) return <ErrorText>{error}</ErrorText>;

    return (
        <Container>
            <TrashCan src={trashImage} alt="쓰레기통" />
            {/* 쓰레기 데이터가 있을 경우 고정된 위치에 쓰레기를 렌더링 */}
            {currentTrashItems.map((trash, index) => (
                <TrashItem
                    key={trash.id}
                    trash={trash}
                    style={trashCoordinates[index]}
                />
            ))}
            {/* 페이지 네비게이션 */}
            <Navigation>
                <ArrowButton onClick={() => handlePageChange('prev')} disabled={currentPage === 0}>
                    <ArrowImage src={leftArrow} rotate="true" alt="이전" />
                </ArrowButton>
                <ArrowButton onClick={() => handlePageChange('next')} disabled={(currentPage + 1) * 8 >= trashItems.length}>
                    <ArrowImage src={rightArrow} alt="다음" />
                </ArrowButton>
            </Navigation>
        </Container>
    );
};

export default TrashCanContainer;

const Container = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TrashCan = styled.img`
    position : relative;
    width: ${({ theme }) => theme.MidOutSection};
    ${({ theme }) => theme.fixedMidOut} 
    margin-bottom: 1rem;
    height: auto;

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 70%;
    }
`;

const Navigation = styled.div`
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    width: 100%;
    width: calc(100% - 20px);
`;

const ArrowButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    img {
        height: auto;
    }

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }
`;

const ArrowImage = styled.img`
    width: 15px;
    height: 15px;
    ${({ rotate }) => rotate && 'transform: rotate(180deg);'}
`;

const ErrorText = styled.div`
    text-align: center;
    font-size: 1.2rem;
    color: red;
    margin-top: 20px;
`;
