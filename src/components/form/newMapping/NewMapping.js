import React from "react";
import { useState } from "react";

import {
  ControlButtons,
  Error,
  Input,
  Label,
  NewMappingContainer,
  OptionsSection,
  Select,
  TitleElement,
} from "./NewMapping.styled";
import { SM_FIELDS } from "../../../utils/fields";

const NewMapping = ({ formFields, toogleModal, addField }) => {
  const [fieldSm, setFieldSm] = useState("");
  const [fieldXml, setFieldXml] = useState("");
  const [fieldOptions, setFieldOptions] = useState({
    trueValue: "",
    currency: "",
    removeUTM: false,
  });
  const [errors, setErrors] = useState([]);

  // Names of selected fields
  const formFieldsName = formFields.map((field) => field.name);

  // Filtering and createing options with not selected fields
  const availableOptions = SM_FIELDS.filter((field) =>
    !formFieldsName.includes(field) ? true : false
  ).map((field) => (
    <option key={field} value={field}>
      {field}
    </option>
  ));

  const handleCloseClick = () => {
    toogleModal();
  };

  const handleSaveClick = () => {
    const errorList = [];
    // console.log(!fieldSm, !fieldXml);
    if (!fieldSm) errorList.push("Chose SM field");
    if (!fieldXml) errorList.push("Enter XML field name");
    if (
      !fieldOptions.currency &&
      (fieldSm === "PRICE" || fieldSm === "PRICE_PROMO")
    )
      errorList.push("Enter currency(default option is EUR)");
    if (
      !fieldOptions.trueValue &&
      fieldSm === "CONDITION" &&
      fieldSm === "AVABILITY" &&
      fieldSm === "GENDER" &&
      fieldSm === "BESTSELLER"
    )
      errorList.push(
        "Enter the value for which the field in the XML should be true "
      );

    if (errorList.length > 0) {
      setErrors(errorList);
    } else {
      const data = { name: fieldSm, value: fieldXml, options: fieldOptions };
      addField(data);
    }
  };

  const handleSelectChange = (e) => {
    setFieldSm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    // console.log(checked);
    switch (name) {
      case "fieldXml":
        setFieldXml(value);
        break;
      case "trueValue":
        setFieldOptions({ ...fieldOptions, trueValue: value });
        break;
      case "currency":
        setFieldOptions({ ...fieldOptions, currency: value });
        break;
      case "utm":
        setFieldOptions({ ...fieldOptions, removeUTM: checked });
        break;
      default:
        console.error("Wrong input type");
        break;
    }
  };

  return (
    <NewMappingContainer>
      <TitleElement>Add new field</TitleElement>
      <Label htmlFor="">
        Chose field in SM
        <Select
          name="smFields"
          id="smFields"
          onChange={handleSelectChange}
          value={fieldSm}
        >
          <option key="default" value="" disabled hidden>
            Select field
          </option>
          {availableOptions}
        </Select>
      </Label>
      <Label htmlFor="">
        Field name in XML
        <Input
          type="text"
          placeholder="Type field name"
          name="fieldXml"
          id="fieldXml"
          onChange={handleInputChange}
          value={fieldXml}
        />
      </Label>
      <OptionsSection className="options">
        {/* brand, newProd, bestseller ---> kiedy true */}
        {fieldSm === "CONDITION" ||
        fieldSm === "BESTSELLER" ||
        fieldSm === "AVABILITY" ||
        fieldSm === "GENDER" ? (
          <>
            <h3>Additional field options</h3>
            <label htmlFor="">
              True value
              <Input
                type="text"
                placeholder="Value"
                name="trueValue"
                id="trueValue"
                onChange={handleInputChange}
                value={fieldOptions.trueValue}
              />
            </label>
          </>
        ) : null}
        {/* price, pricePromo ---> waluta */}
        {fieldSm === "PRICE" || fieldSm === "PRICE_PROMO" ? (
          <>
            <h3>Additional field options</h3>
            <label htmlFor="">
              Currency
              <Input
                type="text"
                placeholder="Value"
                name="currency"
                id="currency"
                onChange={handleInputChange}
                value={fieldOptions.currency}
                defaultValue="EUR"
              />
            </label>
          </>
        ) : null}
        {/* PRODUCT_URL, IMAGE_URL ---> wycinanie UTM */}
        {fieldSm === "PRODUCT_URL" || fieldSm === "IMAGE_URL" ? (
          <>
            <h3>Additional field options</h3>
            <label htmlFor="">
              Remove UTM
              <Input
                type="checkBox"
                name="utm"
                id="utm"
                onChange={handleInputChange}
                value={fieldOptions.removeUTM}
              />
            </label>
          </>
        ) : null}
      </OptionsSection>
      <Error className="errors">
        {errors.length > 0
          ? errors.map((item, index) => (
              <p className="error" key={index}>
                {item}
              </p>
            ))
          : null}
      </Error>
      <ControlButtons className="control_section">
        <button className="dark" onClick={handleCloseClick}>
          Close
        </button>
        <button onClick={handleSaveClick}>Save</button>
      </ControlButtons>
    </NewMappingContainer>
  );
};

export default NewMapping;
