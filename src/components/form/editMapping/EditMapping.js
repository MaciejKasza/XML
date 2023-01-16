import React from "react";
import { useState } from "react";

import {} from "./EditMapping.styled";
import { SM_FIELDS } from "../../../utils/fields";

const EditMapping = ({ field, toogleModal, saveField }) => {
  const [errors, setErrors] = useState([]);
  const [fieldSm, setFieldSm] = useState(field.name);
  const [fieldXml, setFieldXml] = useState(field.value);
  const [fieldOptions, setFieldOptions] = useState({
    trueValue: field.options.trueValue,
    currency: field.options.currency,
    removeUTM: field.options.removeUTM,
  });

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
      (fieldSm === "CONDITION" ||
        fieldSm === "AVABILITY" ||
        fieldSm === "GENDER" ||
        fieldSm === "BESTSELLER")
    )
      errorList.push(
        "Enter the value for which the field in the XML should be true "
      );

    setErrors(errorList);

    if (errorList.length < 1) {
      const data = { name: fieldSm, value: fieldXml, options: fieldOptions };

      saveField(data);
    }
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
    <div>
      <h2>Edit field</h2>
      <label htmlFor="">
        Chosen field in SM:{" "}
        <input
          type="text"
          placeholder=""
          name="fieldXml"
          id="fieldXml"
          // onChange={handleInputChange}
          value={fieldSm}
          disabled={true}
        />
      </label>
      <label htmlFor="">
        Field name in XML:
        <input
          type="text"
          placeholder="Type field name"
          name="fieldXml"
          id="fieldXml"
          onChange={handleInputChange}
          value={fieldXml}
        />
      </label>
      <div className="options">
        {/* brand, newProd, bestseller ---> kiedy true */}
        {fieldSm === "CONDITION" ||
        fieldSm === "BESTSELLER" ||
        fieldSm === "AVABILITY" ||
        fieldSm === "GENDER" ? (
          <>
            <h3>Additional field options</h3>
            <label htmlFor="">
              True value:
              <input
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
              Currency:
              <input
                type="text"
                placeholder="Value"
                name="currency"
                id="currency"
                onChange={handleInputChange}
                value={fieldOptions.currency}
              />
            </label>
          </>
        ) : null}
        {/* PRODUCT_URL, IMAGE_URL ---> wycinanie UTM */}
        {fieldSm === "PRODUCT_URL" || fieldSm === "IMAGE_URL" ? (
          <>
            <h3>Additional field options</h3>
            <label htmlFor="">
              Remove UTM:
              <input
                type="checkBox"
                name="utm"
                id="utm"
                onChange={handleInputChange}
                value={fieldOptions.removeUTM}
              />
            </label>
          </>
        ) : null}
      </div>
      <div className="errors">
        {errors.length > 0
          ? errors.map((item, index) => (
              <p className="error" key={index}>
                {item}
              </p>
            ))
          : null}
      </div>
      <div className="control_section">
        <button onClick={handleCloseClick}>Close</button>
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default EditMapping;
