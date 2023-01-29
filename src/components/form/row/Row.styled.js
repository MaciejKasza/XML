import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.backgroundDark};
  border-radius: 15px;
`;

export const StyledRowInfo = styled.div`
  font-size: 20px;
  /* width: 80%; */
  .main {
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
    .name {
      color: ${(props) => props.theme.backgroundDark};
      margin-right: 10px;
      font-weight: bold;
    }

    .value {
      color: ${(props) => props.theme.primaryColor};
    }
  }

  .options {
    span {
      margin-left: 10px;
      font-size: 10px;
      line-height: 0.6px;
    }
  }
`;

export const StyledRowControls = styled.div`
  span {
    margin: 5px;
    font-size: 20px;
    cursor: pointer;

    &.delete:hover {
      color: red;
    }

    &.edit:hover {
      color: ${(props) => props.theme.grey};
    }
  }
`;
