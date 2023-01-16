import styled from "styled-components";

export const XmlStructurePickerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  span {
    font-size: 20px;
    margin-right: 10px;
  }
`;

export const StyledLabel = styled.div`
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #5c6664;
  overflow: hidden;
  border-radius: 0.25em;
  &::after {
    content: "\\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.white};
    cursor: pointer;
    pointer-events: none;
    transition: 0.25s all ease;
  }

  &:hover::after {
    color: ${(props) => props.theme.green};
  }
`;

export const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: ${(props) => props.theme.backgroundDark};
  background-image: none;
  flex: 1;
  padding: 0 0.5em;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  font-size: 1em;
  font-family: "Open Sans", sans-serif;

  ::-ms-expand {
    display: none;
  }
`;

export const StyledOption = styled.option``;
