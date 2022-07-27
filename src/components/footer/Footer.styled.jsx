import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
  background-color: ${(props) => props.theme.backgroundDark};
  color: ${(props) => props.theme.backgroundLight};
`;
