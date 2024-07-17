import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import "./Products.css";
import logo from "./rozetka1.svg";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import FormModal from "../../components/FormModal/FormModal";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) {
      getProducts();
    }
  }, [isLoaded]);

  const getProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/Product`);
      const data = await response.json();
      setProducts(data);
      setIsLoaded(true);
    } catch (error) {
      console.log("Erorr", error);
    }
  };

  const deleteProduct = async (id) => {
    await fetch(`${API_URL}/Product/${id}`, {
      method: "DELETE",
    });
    setIsLoaded(false);
  };
  const editProduct = async (id,product) => {
    await fetch(`${API_URL}/Product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    setIsLoaded(false);
  };

  const addProduct = async (product) => {
    await fetch(`${API_URL}/Product/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    setIsLoaded(false);
  };

  const handlePreview = () => {
    navigate("/productsInfo");
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="products">
      <div className="logos">
        <img src={logo} alt="logo" />
      </div>
      <div className="box-btn">
        <Button
          onClick={handlePreview}
          className="btns-table"
          text="Preview"
          icon={<MdOutlinePeopleAlt />}
        />
        <Button
          className="btns-table"
          text="Add product"
          icon={<GoPlus />}
          onClick={handleShowForm}
        />
      </div>
      <h2 className="title">Products</h2>
      <Table products={products} deleteProduct={deleteProduct} editProduct = {editProduct}/>
      <FormModal
        show={showForm}
        handleCloseForm={handleCloseForm}
        title="Add Product"
        addProduct = {addProduct}
      />
    </div>
  );
}

export default Products;
