import React from "react";

//Others
import { useStore } from "../../../store/StoreProvider";

//Components
import StepsBarIcon from "./stepsBarIcon/StepsBarIcon";
import { BsFileEarmarkArrowDownFill } from "react-icons/bs";
import { AiFillFileAdd } from "react-icons/ai";

// Style
import { StepsBarWrapper } from "./StepsBarr.styled";

const StepsBarr = (props) => {
  const { steps } = useStore();

  return (
    <StepsBarWrapper>
      <StepsBarIcon
        id={0}
        status={steps[0]}
        text="File read"
        icon={<AiFillFileAdd />}
      ></StepsBarIcon>
      <StepsBarIcon
        id={1}
        status={steps[1]}
        text="File info"
        icon={<AiFillFileAdd />}
      ></StepsBarIcon>
      <StepsBarIcon
        id={2}
        status={steps[2]}
        text="Mapping"
        icon={<AiFillFileAdd />}
      ></StepsBarIcon>
      <StepsBarIcon
        id={3}
        status={steps[3]}
        text="Transform"
        icon={<AiFillFileAdd />}
      ></StepsBarIcon>
    </StepsBarWrapper>
  );
};

export default StepsBarr;
