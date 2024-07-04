import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import logo from "../Products/rozetka1.svg";
import "./ProductsDetail.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    infoProduct(); 
  }, [id]);

  const infoProduct = async () => {
    try {
      const response = await fetch(`${API_URL}/Product/${id}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Erorr", error);
    }
  };

  const handleBack = () => {
    navigate("/productsInfo");
  };

  return (
    <div className="product-detail">
      <div className="box-logo">
        <img src={logo} alt="rozetka" />
      </div>
      <div className="box-detail">
          <FaLongArrowAltLeft   onClick={handleBack} />
        <p className="info-text">{products.name}</p>
      </div>
      <div className="box-information">
        <div className="box-foto">
          <img src={products.foto} alt="foto" />
        </div>
        <div className="box-infa">
          <p className="infa-status">
            <BsFillCheckCircleFill />
            {products.status}
          </p>
          <p className="infa-price">{products.price}₴</p>
          <p className="infa-quantity">Кількість:{products.quantity}</p>
        </div>
      </div>
      <div className="based-info">
        <p className="based-name">
          {" "}
          <span>Опис</span> {products.name}
        </p>
        <p className="based-text">{products.name}</p>
        <p className="based-text">{products.name}</p>
        <p className="based-text">{products.name}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
