import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const StyledModalContent = styled.div`
  min-width: 500px;

  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  /* Do zmiany kolory */
  background-color: #fff; //
  color: #000;
  display: flex;
  position: relative;
  padding: 10px;
`;

export const StyledCloseBtn = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.2rem;
`;
