import React from 'react';
import { useParams } from 'react-router-dom';


const productInfo = [
    { id: 0, name: "Ноутбук Lenovo Y50-70 Aluminum Black", quantity: 5, price: 25000 },
    { id: 1, name: "Ноутбук Asus A60-70 Aluminum Blue", quantity: 5, price: 29000 },
    { id: 2, name: "Ноутбук HP K100-70 Aluminum White", quantity: 5, price: 34000 },
    { id: 3, name: "Ноутбук HP K100-70 Aluminum White", quantity: 5, price: 34000 },
    { id: 4, name: "Ноутбук HP K100-70 Aluminum White", quantity: 5, price: 34000 },
    { id: 5, name: "Ноутбук HP K100-70 Aluminum White", quantity: 5, price: 34000 },
];


const ProductDetail = () => {
    const { ProductDetail } = useParams();
    const product = productInfo.find(p => ProductDetail.id === parseInt(id));
  
    return (
      <div className="product-detail">
        <p> ProductDetail {product}</p>
      </div>
    );
  };
  
  export default ProductDetail;