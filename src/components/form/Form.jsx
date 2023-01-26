import React from "react";
import { useState } from "react";

//Others
import { SM_FIELDS } from "../../utils/fields";

//Components
import Modal from "../modal/Modal";
import Row from "./row/Row";
import NewMapping from "./newMapping/NewMapping";
import XmlStructurePicker from "./xmlStructurePicker/XmlStructurePicker";
import { BsFillPlusCircleFill } from "react-icons/bs";

// Style
import {
  StyledForm,
  StyledAddButton,
  StyledControls,
  StyledCreateButton,
} from "./Form.styled";
import { getTransform } from "../../utils/functions";

const Form = (props) => {
  const [showModal, setShowModal] = useState(false);
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

  const createTranform = () => {
    console.log("createTranform");
    //Create json to send
    const transformData = {
      structure: xmlStructure,
      mapping: formFields,
    };
    console.log(transformData);
    getTransform(transformData);
  };

  let fieldsToRender = formFields.map((field, index) => (
    <Row key={index} data={field} edit={editRow} delete={deleteRow}></Row>
  ));

  // console.log(formFields, fieldsToRender);
  return (
    <StyledForm>
      <XmlStructurePicker choseXmlStructure={choseXmlStructure} />
      {fieldsToRender}
      {formFields.length < SM_FIELDS.length ? (
        <AddButton toogleModal={toogleModal} />
      ) : null}
      <StyledCreateButton onClick={createTranform}>
        Create transform
      </StyledCreateButton>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <NewMapping
          formFields={formFields}
          toogleModal={toogleModal}
          addField={addField}
        />
      </Modal>
    </StyledForm>
  );
};

export default Form;

const AddButton = ({ toogleModal }) => {
  //   console.log("Add");
  return <StyledAddButton onClick={toogleModal}>+</StyledAddButton>;
};
