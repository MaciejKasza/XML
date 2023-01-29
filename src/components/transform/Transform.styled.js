import styled from "styled-components";

export const TransformWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    text-transform: uppercase;
    margin: 15px 0;
  }
`;

export const TransformContent = styled.div`
  & textarea {
    width: 600px;
    max-width: 600px;
    height: 600px;
  }
`;

export const TransformNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  width: 100%;
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
