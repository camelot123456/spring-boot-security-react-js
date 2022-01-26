import { Modal } from "react-bootstrap";
import { memo } from "react"

function ModalCustom(props) {

  console.log(props)

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={props.keyboard}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.content}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={props.cb_close}>
          {props.nameBtnClose}
        </button>
        <button className="btn btn-danger" onClick={props.cb_submit}>
          {props.nameBtnSubmit}
        </button>
      </Modal.Footer>
    </Modal>

    // <Modal
    //     show={false}
    //     onHide={true}
    //     backdrop="static"
    //     keyboard={false}
    //   >
    //     <Modal.Header closeButton>
    //       <Modal.Title>Warning</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>Do you want delete this roles ?</Modal.Body>
    //     <Modal.Footer>
    //       <button className="btn btn-secondary">
    //         Close
    //       </button>
    //       <button
    //         className="btn btn-danger"
    //       >
    //         Delete
    //       </button>
    //     </Modal.Footer>
    //   </Modal>
  );
}

export default memo(ModalCustom)
