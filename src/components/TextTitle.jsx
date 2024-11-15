import React from 'react'
import styled from 'styled-components'

const TextTitle = ({ children }) => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}

export default TextTitle

const StyledTitle = styled.div`
    font-size: 1.5rem;
    font-family: 'Pretendard-SemiBold';
    text-align: center;
    color: ${({ theme }) => theme.backgroundColors.dark};
    background:  ${({ theme }) => theme.backgroundColors.light}; 
    box-shadow : 0 0 1rem 0.5rem ${({ theme }) => theme.backgroundColors.light}; 
    width: ${({ theme }) => theme.MiddleSection};
    ${({ theme }) => theme.MiddleSection};
`;