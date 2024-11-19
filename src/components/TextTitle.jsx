import React from 'react'
import styled from 'styled-components'

const TextTitle = ({ children, fontFamily }) => {
    console.log("fontFamily prop:", fontFamily);
    return (
        <StyledTitle fontFamily={fontFamily}>
            {children}
        </StyledTitle>
    )
}

export default TextTitle

const StyledTitle = styled.div`
    font-size: 1.2rem;
    font-family: ${({ fontFamily }) => fontFamily || 'Pretendard-SemiBold'};
    text-align: center;
    color: ${({ theme }) => theme.backgroundColors.dark};
    background:  ${({ theme }) => theme.backgroundColors.light}; 
    box-shadow : 0 0 1rem 0.5rem ${({ theme }) => theme.backgroundColors.light}; 
    width: ${({ theme }) => theme.MiddleSection};
    ${({ theme }) => theme.fixedMiddle};
`;