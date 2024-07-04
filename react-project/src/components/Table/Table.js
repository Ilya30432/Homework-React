import "./Table.css";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";
import vector from "./vector.svg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const titleInfo = ["Id", "Category", "Name", "Quantity", "Price(₴)"];

function Table({products , deleteProduct}) {
  const [show, setShow] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  const handleClose = () => {
    setProductIdToDelete(null)
    setShow(false);
  };
  const handleShow = (id) => {
    setProductIdToDelete(id);
    setShow(true);
  };

  const handleDelete = () => {
    deleteProduct(productIdToDelete);
    handleClose();
  };

  return (
    <table className="table-product">
      <thead>
        <tr className="title-row">
          {titleInfo.map((info, index) => (
            <td key={index} className="title-info">
              {info}
              <img src={vector} alt="vector" className="vector" />
            </td>
          ))}
          <td className="title-info"></td>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className={`row-${product.id}`}>
            {Object.values(product).map((info, index) => (
              <td key={index} className={`info-${product.id}`}>
                {info}
              </td>
            ))}
            <td>
              <p className="icon">
                <BiSolidPencil />
                <FaTrashCan onClick={() => handleShow(product.id)} />
              </p>
            </td>
          </tr>
        ))}
      </tbody>
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
    </table>
  );
}

export default Table;
