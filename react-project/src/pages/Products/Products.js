import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import "./Products.css";
import logo from "./rozetka1.svg";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const infoProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/Product`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Erorr", error);
      }
    };
    infoProduct();
  }, []);

  const handlePreview = () => {
    navigate("/productsInfo");
  };

  return (
    <div className="products">
      <div className="logos">
        <img src={logo} alt="logo" />
      </div>
      <div className="box-btn">
        <Button
          onClick={handlePreview}
          className="btn-table"
          text="Preview"
          icon={<MdOutlinePeopleAlt />}
        />
        <Button className="btn-table" text="Add product" icon={<GoPlus />} />
      </div>
      <h2 className="title">Products</h2>
      <Table products={products} />
    </div>
  );
}

export default Products;
