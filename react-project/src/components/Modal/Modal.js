import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ExampleModal({ body, handleClose, handleAction, show, text }) {
  return (
    <>
      <Modal show={show}>
        <Modal.Body> {body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAction}>
            {text}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ExampleModal;
