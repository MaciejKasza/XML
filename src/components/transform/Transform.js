import React from "react";
import { useRef } from "react";
import { useState } from "react";
import {
  TransformWrapper,
  TransformContent,
  TransformNavigation,
} from "./Transform.styled";

const Transform = ({
  showTransform,
  setShowTranform,
  transform,
  setTransform,
}) => {
  const [areaText, setAreaText] = useState(JSON.stringify(transform));
  const textAreaRef = useRef(null);

  const handleTextAreaChange = (e) => {
    setAreaText(e.target.value);
  };

  const handleCopyClick = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
  };

  const handleBackClick = (e) => {
    setShowTranform(false);
  };

  return (
    <TransformWrapper>
      <h2>Your transform</h2>
      <TransformContent>
        <textarea
          ref={textAreaRef}
          name="transform"
          id="transform"
          cols="30"
          rows="10"
          value={areaText}
          onChange={handleTextAreaChange}
        >
          {JSON.stringify(transform)}
        </textarea>
      </TransformContent>
      <TransformNavigation>
        <button onClick={handleBackClick}>Back</button>
        <button onClick={handleCopyClick}>Copy</button>
      </TransformNavigation>
    </TransformWrapper>
  );
};

export default Transform;
