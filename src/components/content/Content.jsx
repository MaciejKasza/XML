import React from "react";
import { useStore } from "../../store/StoreProvider";

//Others

//Components
import Form from "../form/Form";

// Style
import { ContentWrapper, StyledContent } from "./Content.styled";

import StepsBarr from "./stepsBar/StepsBarr";

const Content = (props) => {
  const { nextStep, prevStep } = useStore();

  return (
    <ContentWrapper>
      <StyledContent>
        {/* <StepsBarr></StepsBarr> */}
        <Form />
      </StyledContent>
    </ContentWrapper>
  );
};

export default Content;
