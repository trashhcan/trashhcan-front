//쓰레기 하나 렌더링, 조회까지
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TrashItem = ({ trash, style }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/mainpage/letter/${trash.id}`);
    };

    return (
        <Trash style={{
            ...style,
            width: style.width,
        }} onClick={handleClick}>
            <img src={trash.trashimage_url} alt="쓰레기" />
        </Trash>
    );
};

export default TrashItem;

// 스타일 컴포넌트
const Trash = styled.div`
    position: absolute;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.1);
        transition: transform 0.2s;
    }
`;
