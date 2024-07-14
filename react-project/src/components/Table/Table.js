import "./Table.css";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";
import vector from "./vector.svg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ExampleModal from "../Modal/Modal";
import FormModal from "../FormModal/FormModal";

const titleInfo = ["Id", "Category", "Name", "Quantity", "Price(₴)"];

function Table({ products, deleteProduct ,putProduct}) {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [productToPut, setProductToPut] = useState(null);

  const handleClose = () => {
    setProductIdToDelete(null);
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

  const handleShowForm = (product) => {
    setProductToPut(product);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setProductToPut(null);
    setShowForm(false);
  };

  return (
    <div>
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
                  <BiSolidPencil onClick={() => handleShowForm(product)} />
                  <FaTrashCan onClick={() => handleShow(product.id)} />
                </p>
              </td>
            </tr>
          ))}
        </tbody>
        <ExampleModal
          show={show}
          handleClose={handleClose}
          handleAction={handleDelete}
          text="Delete"
          body="Подверить дейстивие"
        />
        <FormModal
          show={showForm}
          handleCloseForm={handleCloseForm}
          title="Edit Product"
          productToPut = {productToPut}
          putProduct = {putProduct}
        />
      </table>
    </div>
  );
}

export default Table;
