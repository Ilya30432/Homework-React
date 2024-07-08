import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ExampleModal({ handleClose, handleDelete, show }) {
  return (
    <>
      <Modal show={show}>
        <Modal.Body>Подверить дейстивие</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ExampleModal;
