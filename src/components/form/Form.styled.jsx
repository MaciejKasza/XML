import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledAddButton = styled.button`
  outline: none;
  border: none;
  background: none;

  margin: 5px auto;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  font-size: 38px;

  border: 2px dashed ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  border-radius: 50%;
  overflow: hidden;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.grey};
    border-color: ${(props) => props.theme.grey};
  }
`;

export const StyledControls = styled.div``;

export const StyledCreateButton = styled.button`
  outline: none;
  border: none;
  background: none;

  margin: 5px 0 5px auto;
  padding: 10px 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.backgroundDark};
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.green};
  font-weight: bold;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.backgroundDark};
    font-weight: bold;
    border: 2px solid ${(props) => props.theme.backgroundDark};
  }
`;
