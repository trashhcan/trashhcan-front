import React from 'react'
import styled from 'styled-components'

const TextInputLight = ({ placeholder, value, onChange }) => {
    return (
        <StyledInput
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default TextInputLight

const StyledInput = styled.input`
    font-family: 'Pretendard-Medium';
    font-size: 1.2rem;
    text-align: center;
    width: ${({ theme }) => theme.MiddleSection};
    ${({ theme }) => theme.fixedMiddle};
    color: ${({ theme }) => theme.backgroundColors.dark};
    border: 0.1rem solid;
    border-color: ${({ theme }) => theme.backgroundColors.dark};
    background-color: ${({ theme }) => theme.backgroundColors.light};
    border-radius: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    &::placeholder {
        color: ${({ theme }) => theme.backgroundColors.dark};
    }
`