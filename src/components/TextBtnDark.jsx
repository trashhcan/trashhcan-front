import React from 'react'
import styled from 'styled-components'
import Spacer from './Spacer';
import { SIZES } from '../styles/spacing';

const TextBtnDark = ({ text, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            <Spacer size={SIZES.MINIMUN} />
            {text}
            <Spacer size={SIZES.MINIMUN} />
        </StyledButton>
    )
}

export default TextBtnDark

const StyledButton = styled.button`
    font-family: 'Pretendard-Medium';
    font-size: 1rem;
    width: ${({ theme }) => theme.MiddleSection};
    ${({ theme }) => theme.fixedMiddle};
    color: ${({ theme }) => theme.backgroundColors.grey};
    border-color: ${({ theme }) => theme.backgroundColors.dark};
    background-color: ${({ theme }) => theme.backgroundColors.dark};
    border-radius: 1rem;
`