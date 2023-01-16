import React, { Children } from "react";
import { useState } from "react";

//Others
import { XML_STRUCTURE } from "../../../utils/fields";
//Components

// Style
import {
  XmlStructurePickerContainer,
  StyledLabel,
  StyledSelect,
  StyledOption,
} from "./XmlStructurePicker.styled";

const XmlStructurePicker = ({ choseXmlStructure }) => {
  const [xmlStructure, setXmlStructure] = useState("");

  const availableOptions = XML_STRUCTURE.map((item, index) => (
    <StyledOption key={item} value={item}>
      {item}
    </StyledOption>
  ));
  const handleSelectChange = (e) => {
    setXmlStructure(e.target.value);
    choseXmlStructure(e.target.value);
  };

  return (
    <XmlStructurePickerContainer>
      <span>Select XML structure </span>
      <StyledLabel>
        <StyledSelect
          name="xmlStructure"
          id="xmlStructure"
          onChange={handleSelectChange}
          value={xmlStructure}
        >
          <StyledOption key="default" value="" disabled hidden>
            Structure
          </StyledOption>
          {availableOptions}
        </StyledSelect>
      </StyledLabel>
    </XmlStructurePickerContainer>
  );
};

export default XmlStructurePicker;
