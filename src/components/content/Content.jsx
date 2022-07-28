import React from "react";
import { useStore } from "../../store/StoreProvider";

//Others

//Components

// Style
import { ContentWrapper, StyledContent } from "./Content.styled";

import StepsBarr from "./stepsBar/StepsBarr";

const Content = (props) => {
  const { nextStep, prevStep } = useStore();
  return (
    <ContentWrapper>
      <StyledContent>
        <StepsBarr></StepsBarr>
        <button onClick={() => {}}></button>
      </StyledContent>
    </ContentWrapper>
  );
};

export default Content;
