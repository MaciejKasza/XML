import React from "react";
import { useState } from "react";

//Others
import { SM_FIELDS } from "../../utils/fields";

//Components
import Modal from "../modal/Modal";
import Row from "./row/Row";
import NewMapping from "./newMapping/NewMapping";
import XmlStructurePicker from "./xmlStructurePicker/XmlStructurePicker";

// Style
import {
  StyledForm,
  StyledAddButton,
  StyledCreateButton,
  StyledResetButton,
  StyledContorlButtonsContainer,
} from "./Form.styled";
import { getTransform } from "../../utils/functions";
import LoadingSpinner from "../spinner/LoadingSpinner";

const Form = ({ showTransform, setShowTranform, transform, setTransform }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [xmlStructure, setXmlStructure] = useState("");
  const [formFields, setFormFields] = useState([
    {
      name: "EXTERNAL_ID",
      value: "g:id",
      options: { trueValue: "", currency: "", removeUTM: "" },
    },
  ]);

  const choseXmlStructure = (data) => {
    setXmlStructure(data);
  };

  const deleteRow = (name) => {
    const tmpFields = formFields.filter((field) =>
      field.name === name && field.name !== "EXTERNAL_ID" ? false : true
    );
    setFormFields(tmpFields);
    console.log(xmlStructure, formFields);
  };

  const editRow = (data) => {
    const tmp = formFields.map((field) =>
      field.name === data.name ? data : field
    );
    setFormFields(tmp);
  };

  const addField = (data) => {
    setFormFields([...formFields, data]);
    toogleModal();
  };

  const toogleModal = () => {
    setShowModal((prev) => !prev);
    // console.log("Open modal");
  };

  const resetForm = () => {
    setFormFields([
      {
        name: "EXTERNAL_ID",
        value: "g:id",
        options: { trueValue: "", currency: "", removeUTM: "" },
      },
    ]);
  };

  const createTranform = async () => {
    const transformData = {
      structure: xmlStructure,
      mapping: formFields,
    };

    setIsLoading(true);
    try {
      const result = await getTransform(transformData);
      // console.log(result);
      // console.log(showTransform, transform);
      console.log(result);
      setTransform(result);
      setShowTranform(true);
    } catch (error) {
      console.log("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  let fieldsToRender = formFields.map((field, index) => (
    <Row key={index} data={field} edit={editRow} delete={deleteRow}></Row>
  ));

  // console.log(formFields, fieldsToRender);
  return (
    <>
      {!showTransform && (
        <StyledForm>
          <XmlStructurePicker choseXmlStructure={choseXmlStructure} />
          {fieldsToRender}
          {formFields.length < SM_FIELDS.length ? (
            <AddButton toogleModal={toogleModal} />
          ) : null}
          <StyledContorlButtonsContainer>
            <StyledResetButton onClick={resetForm}>
              Reset mapping
            </StyledResetButton>
            <StyledCreateButton onClick={createTranform}>
              Create transform
            </StyledCreateButton>
          </StyledContorlButtonsContainer>
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <NewMapping
              formFields={formFields}
              toogleModal={toogleModal}
              addField={addField}
            />
          </Modal>
          {isLoading && <LoadingSpinner />}
        </StyledForm>
      )}
    </>
  );
};

export default Form;

const AddButton = ({ toogleModal }) => {
  //   console.log("Add");
  return <StyledAddButton onClick={toogleModal}>+</StyledAddButton>;
};
