import React from 'react'
import styled from 'styled-components'
import trashImg from '../assets/images/banana-fresh.png'
import Spacer from './Spacer'
import { SIZES } from '../styles/spacing'
import { useNavigate } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";

const TrashCard = ({ id, imageUrl, content }) => {
    console.log('trash:', id, imageUrl, content);

    const navigate = useNavigate();

    const handleLetterDetails = () => {
        navigate(`/mainpage/letter/${id}`);
    };

    return (
        <Card onClick={handleLetterDetails}>
            <Spacer size={SIZES.MINIMUN} />
            <IconBox>
                <MdArrowOutward />
            </IconBox>
            <CardImg src={imageUrl} />
            <CardLine>{content.substring(0, 5)}...</CardLine>
            <Spacer size={SIZES.MINIMUN} />
        </Card>
    )
}

export default TrashCard

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid ${({ theme }) => theme.backgroundColors.dark};
    border-radius: 1rem;
    width: 100%;
    position: relative;
        transition: transform 0.3s ease; /* 애니메이션 효과 추가 */

    &:hover {
        transform: scale(1.05); /* 살짝 커지는 효과 */
        box-shadow: 0.25rem 0.25rem 0.5rem ${({ theme }) => theme.colors.grey}; /* 살짝 그림자 추가 */
    }
`

const IconBox = styled.div`
    position: absolute;
    top: 5%;
    right: 5%;
    color: ${({ theme }) => theme.colors.greySecond};

`

const CardImg = styled.img`
    width: ${({ theme }) => theme.MinimumSection};
    ${({ theme }) => theme.fixedMin};
`

const CardLine = styled.div`
    font-size: 0.9rem;
`