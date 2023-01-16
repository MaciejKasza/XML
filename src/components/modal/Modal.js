import React, { Children } from "react";

//Others

//Components

// Style
import {
  StyledModal,
  StyledModalContent,
  StyledCloseBtn,
} from "./Modal.styled";

const Modal = ({ showModal, setShowModal, children }) => {
  const closeModal = () => {
    setShowModal((prev) => !prev);
  };

  return showModal ? (
    <StyledModal>
      <StyledModalContent>
        <StyledCloseBtn onClick={closeModal}>X</StyledCloseBtn>
        {children}
      </StyledModalContent>
    </StyledModal>
  ) : null;
};

export default Modal;
