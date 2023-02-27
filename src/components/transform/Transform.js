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
  const [areaText, setAreaText] = useState(JSON.stringify(transform.data));
  const textAreaRef = useRef(null);

  const handleTextAreaChange = (e) => {
    setAreaText(e.target.value);
  };

  const handleCopyClick = (e) => {
    navigator.clipboard.writeText(textAreaRef.current.innerText);
    // textAreaRef.current.select();
    // document.execCommand("copy");
    // e.target.focus();
  };

  const handleBackClick = (e) => {
    setShowTranform(false);
  };

  return (
    <TransformWrapper>
      <h2>Your transform</h2>
      <TransformContent>
        {/* <textarea
          ref={textAreaRef}
          name="transform"
          id="transform"
          cols="30"
          rows="10"
          value={areaText}
          onChange={handleTextAreaChange}
          disabled={true}
        > */}
        {/* {JSON.stringify(transform)}
         */}
        {/* {transform} */}
        {/* </textarea> */}
        {console.log(transform)}
        {transform.status === 200 ? (
          <div className="transform">
            <pre ref={textAreaRef}>{transform.data}</pre>
          </div>
        ) : (
          <div className="error">
            <p>{transform.data}</p>
          </div>
        )}
      </TransformContent>
      <TransformNavigation>
        <button onClick={handleBackClick}>Back</button>
        <button onClick={handleCopyClick}>Copy</button>
      </TransformNavigation>
    </TransformWrapper>
  );
};

export default Transform;
