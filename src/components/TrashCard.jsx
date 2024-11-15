import React from 'react'
import styled from 'styled-components'
import trashImg from '../assets/images/banana-fresh.png'
import Spacer from './Spacer'
import { SIZES } from '../styles/spacing'

const TrashCard = () => {
    return (
        <Card>
            {/* Todo: 카드 컴포넌트마다 링크 추가하기 */}
            <Spacer size={SIZES.MINIMUN} />
            <CardImg src={trashImg} />
            <CardLine>세상에서 제일...</CardLine>
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
`

const CardImg = styled.img`
    width: ${({ theme }) => theme.InnerSection};
    ${({ theme }) => theme.fixedInner};
`

const CardLine = styled.div`
    font-size: 0.9rem;
`