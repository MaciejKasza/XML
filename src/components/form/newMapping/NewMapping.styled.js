import styled from "styled-components";

export const NewMappingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TitleElement = styled.h2`
  margin-top: 10px;
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 10px 0;
  font-size: 20px;
`;

export const Select = styled.select`
  width: 200px;
  padding: 5px;
`;

export const Input = styled.input`
  padding: 5px;
  width: 200px;
`;

export const ControlButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  width: 80%;
  margin-top: 15px;

  & button {
    outline: none;
    border: none;
    background: none;

    padding: 10px 15px;

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

    &.dark {
      background-color: ${(props) => props.theme.backgroundDark};
      color: ${(props) => props.theme.green};
      border: 2px solid ${(props) => props.theme.backgroundDark};

      &:hover {
        border: 2px solid ${(props) => props.theme.green};
      }
    }
  }
`;

export const OptionsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & label {
    margin-top: 10px;
    height: 25px;
  }

  & input {
    margin-left: 5px;
  }

  & input[type="checkbox"] {
    width: 20px;
  }
`;

export const Error = styled.div`
  padding: 10px;
  color: red;
  text-align: center;
`;
