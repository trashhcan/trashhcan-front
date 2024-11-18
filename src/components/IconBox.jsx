import styled from "styled-components";

const IconBox = styled.div`
    display: flex;
    font-size: ${({ fontSize }) => fontSize || "1.8rem"};
    width: ${({ theme }) => theme.OuterSection};
    ${({ theme }) => theme.fixedOuter};
    justify-content: ${({ justifyContent }) => justifyContent || "center"};
`

export default IconBox;
