import React from "react";
import styled from "styled-components";

//Others
import { BsCheckLg } from "react-icons/bs";
//Components

// Style

const StepsBarIcon = ({ icon, text, status, id }) => {
  console.log(status);
  return (
    <StyledIcon>
      <Icon status={status} id={id}>
        {status === "complete" ? <BsCheckLg /> : icon}
      </Icon>
      <Text>{text}</Text>
    </StyledIcon>
  );
};

export default StepsBarIcon;

export const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 70px;
  height: 70px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: ${(props) =>
    props.status === "active" || props.status === "complete"
      ? props.theme.green
      : props.theme.primaryColor};
  color: ${(props) =>
    props.status === "active" || props.status === "complete"
      ? props.theme.primaryColor
      : props.theme.green};
  width: 50px;
  height: 50px;
  border-radius: 50%;

  font-size: 20px;

  &::after {
    display: ${(props) => (props.id !== 3 ? "block" : "none")};
    content: "";
    position: absolute;
    left: 90%;
    width: 200px;
    height: 6px;
    background-color: ${(props) =>
      props.status === "complete"
        ? props.theme.green
        : props.theme.primaryColor};
    z-index: -1;
  }
`;

export const Text = styled.span`
  display: block;
  line-height: 20px;

  ${(props) => props.theme.primaryColor};
`;
