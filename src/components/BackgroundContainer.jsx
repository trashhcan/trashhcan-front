import styled from 'styled-components';

const BackgroundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-image: url(${props => props.backgroundImage});
`

export default BackgroundContainer;