import { Modal } from "react-bootstrap";

function ModalCustom(show, onHide, keyboard, title, content,nameBtnClose, cb_close,nameBtnSubmit, cb_submit) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={keyboard}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={cb_close}>
          {nameBtnClose}
        </button>
        <button className="btn btn-danger" onClick={cb_submit}>
          {nameBtnSubmit}
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCustom;
