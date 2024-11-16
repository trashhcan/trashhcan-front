import styled from "styled-components";

const IconBox = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 2rem;
    width: ${({ theme }) => theme.OuterSection};
    ${({ theme }) => theme.fixedOuter};
    justify-content: ${({ justifyContent }) => justifyContent || "center"};
`

export default IconBox;
