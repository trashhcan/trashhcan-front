//쓸모없는주제던지기
//api연결필요
import React from 'react'
import styled from 'styled-components'

const RandomTitle = ({subject}) => {
  return (
    <SubWrapper>
        {`{ ${subject} }`} 
    </SubWrapper>
  )
}

export default RandomTitle

const SubWrapper = styled.div`
    display: inline-block;
    font-size: 20px;
    font-family: 'Pretendard-Bold', sans-serif;
    text-align: center;
    margin-bottom: 8px;
    background-color: ${({theme}) => theme.backgroundColors.light};
    opacity: 0.5; /* 불투명도 */
    width: auto; /* 글자 길이에 맞춰 자동 조정 */
`