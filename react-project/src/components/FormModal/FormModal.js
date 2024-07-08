import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function FormModal({ show, handleCloseForm, title }) {
  return (
    <Modal show={show} onHide={handleCloseForm}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasic1">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic2">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="Text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="Text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTextarea">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseForm}>
          Cancel
        </Button>
        <Button variant="primary">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal;
