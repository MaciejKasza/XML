import React from "react";
import { useState } from "react";
import { useStore } from "../../store/StoreProvider";

//Others

//Components
import Form from "../form/Form";
import Transform from "../transform/Transform";

// Style
import { ContentWrapper, StyledContent } from "./Content.styled";

import StepsBarr from "./stepsBar/StepsBarr";

const Content = (props) => {
  const { nextStep, prevStep } = useStore();
  const [transform, setTransform] = useState("");
  const [showTransform, setShowTranform] = useState(false);

  return (
    <ContentWrapper>
      <StyledContent>
        {/* <StepsBarr></StepsBarr> */}

        <Form
          showTransform={showTransform}
          setShowTranform={setShowTranform}
          transform={transform}
          setTransform={setTransform}
        />
        {showTransform ? (
          <Transform
            showTransform={showTransform}
            setShowTranform={setShowTranform}
            transform={transform}
            setTransform={setTransform}
          />
        ) : null}
        {/* {showTransform ? (
          <Transform
            showTransform={showTransform}
            setShowTranform={setShowTranform}
            transform={transform}
            setTransform={setTransform}
          />
        ) : (
          <Form
            showTransform={showTransform}
            setShowTranform={setShowTranform}
            transform={transform}
            setTransform={setTransform}
          />
        )} */}
      </StyledContent>
    </ContentWrapper>
  );
};

export default Content;
