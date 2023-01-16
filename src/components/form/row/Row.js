import React from "react";
import { useState } from "react";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Modal from "../../modal/Modal";
import EditMapping from "../editMapping/EditMapping";

import { StyledRow, StyledRowControls, StyledRowInfo } from "./Row.styled";

const Row = (props) => {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal((prev) => !prev);
    // console.log("Open modal");
  };

  const handleDeleteClick = () => {
    props.delete(data.name);
  };

  const handleEditClick = () => {
    toogleModal();
  };

  const saveField = (data) => {
    toogleModal();
    props.edit(data);
  };

  return (
    <StyledRow>
      <StyledRowInfo>
        <div className="main">
          <span className="name">{data.name}:</span>
          <span className="value">{data.value}</span>
        </div>
        {(data.options.trueValue ||
          data.options.currency ||
          data.options.removeUTM) && (
          <div className="options">
            <span>
              {data.options.trueValue
                ? `true value: ${data.options.trueValue}`
                : null}
            </span>
            <span>
              {data.options.currency
                ? `currency: ${data.options.currency}`
                : null}
            </span>
            <span>
              {data.options.removeUTM
                ? `remove UTM: ${data.options.removeUTM}`
                : null}
            </span>
          </div>
        )}
      </StyledRowInfo>
      <StyledRowControls>
        <span className="edit" onClick={handleEditClick}>
          {data.name === "EXTERNAL_ID" ? null : <AiOutlineEdit />}
        </span>
        <span className="delete" onClick={handleDeleteClick}>
          {data.name === "EXTERNAL_ID" ? null : <AiOutlineDelete />}
        </span>
      </StyledRowControls>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <EditMapping
          field={data}
          toogleModal={toogleModal}
          saveField={saveField}
        />
      </Modal>
    </StyledRow>
  );
};

export default Row;
