import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import "../Input/Input.css";

function FormModal({ show, handleCloseForm, title, productToPut, putProduct ,postProduct}) {
  const [isCategory, setIsCategory] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isQuantity, setIsQuantity] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isStatus, setIsStatus] = useState(false);

  const validForm = () => {
    let isValid = true;
    
    if (!formValues.category.trim()) {
      setIsCategory(true);
      isValid = false;
    }
    if (!formValues.name.trim()) {
      setIsName(true);
      isValid = false;
    }
    if (!String(formValues.quantity).trim()) {
      setIsQuantity(true);
      isValid = false;
    }
    if (!String(formValues.price).trim()) {
      setIsPrice(true);
      isValid = false;
    }
    if (!formValues.status.trim()) {
      setIsStatus(true);
      isValid = false;
    }
  
    return isValid;
  };

  const [formValues, setFormValues] = useState({
    category: "",
    name: "",
    quantity: "",
    price: "",
    status: "",
  });

  useEffect(() => {
    if ( productToPut) {
      setFormValues({
        category: productToPut.category,
        name: productToPut.name,
        quantity: productToPut.quantity,
        price: productToPut.price,
        status: productToPut.status,
      });
    } else {
      setFormValues({
        category: "",
        name: "",
        quantity: "",
        price: "",
        status: "",
      });
    }
  }, [productToPut]);

  const resetForm = () => {
    setFormValues({
      category: "",
      name: "",
      quantity: "",
      price: "",
      status: "",
    });
    setIsCategory(false);
    setIsName(false);
    setIsQuantity(false);
    setIsPrice(false);
    setIsStatus(false)
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    switch (id) {
      case "category":
        setIsCategory(false);
        break;
      case "name":
        setIsName(false);
        break;
      case "quantity":
        setIsQuantity(false);
        break;
      case "price":
        setIsPrice(false);
        break;
        case "status":
        setIsStatus(false);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validForm();
    if (!isValid) {
      return;
    }
    if (productToPut) {
      await putProduct(productToPut.id, formValues);
    } else {
      await postProduct(formValues);
    }
    handleCloseForm();
  };

  return (
    <Modal show={show} onHide={() => { resetForm(); handleCloseForm()}}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={formValues.category}
              onChange={handleChange}
              className={` ${isCategory && "input-error"}`}
            />
            {isCategory && <div className="error">This field is required</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={formValues.name}
              onChange={handleChange}
              className={` ${isName && "input-error"}`}
            />
            {isName && <div className="error">This field is required</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              value={formValues.quantity}
              onChange={handleChange}
              className={` ${isQuantity && "input-error"}`}
            />
            {isQuantity && <div className="error">This field is required</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              value={formValues.price}
              onChange={handleChange}
              className={` ${isPrice && "input-error"}`}
            />
            {isPrice && <div className="error">This field is required</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              value={formValues.status}
              onChange={handleChange}
              className={` ${isStatus && "input-error"}`}
            />
            {isStatus && <div className="error">This field is required</div>}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { resetForm(); handleCloseForm()}}>
          Cancel
        </Button>
        <Button variant="primary"onClick={ handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal;
