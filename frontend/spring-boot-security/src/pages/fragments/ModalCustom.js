import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalCustom(props) {
  const {
    show,
    title,
    body,
    nameBtnNegative,
    nameBtnPositive,
    colorBtnNegative,
    colorBtnPositive,
    onBtnNegative,
    onBtnPositive,
  } = props;

  const handleModalPositive = () => {
    if (onBtnPositive) {
      onBtnPositive();
    }
  };

  const handleModalNegative = () => {
    if (onBtnNegative) {
      onBtnNegative();
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleModalPositive}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant={colorBtnPositive} onClick={handleModalPositive}>
            {nameBtnPositive}
          </Button>
          <Button variant={colorBtnNegative} onClick={handleModalNegative}>
            {nameBtnNegative}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCustom;
