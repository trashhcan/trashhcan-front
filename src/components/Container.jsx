import styled from 'styled-components';
import { theme } from '../styles/theme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-color: ${({ theme }) => theme.backgroundColors.light};
    position: relative;
`

export default Container;