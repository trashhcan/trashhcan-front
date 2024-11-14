import styled from 'styled-components';

const Spacer = styled.div`
    height: ${({ size }) => size || '1rem'}; 
    width: ${({ width }) => width || '100%'};
`;

export default Spacer;
