import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundDark};
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 1200px;
`;

export const StyledImage = styled.img`
  width: 80px;
`;
