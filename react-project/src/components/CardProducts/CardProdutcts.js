import "./CardProducts.css";
import foto from "./notebook.png";
import { BsCart4 } from "react-icons/bs";


const productInfo = [
    { id: 0, name: "Ноутбук Lenovo Y50-70 Aluminum Black", quantity: 5, price: 25000 },
    { id: 1, name: "Ноутбук Asus A60-70 Aluminum Blue", quantity: 5, price: 29000 },
    { id: 2, name: "Ноутбук HP K100-70 Aluminum White", quantity: 5, price: 34000 },
    { id: 3, name: "Ноутбук HP K100-70 Aluminum White", quantity: 5, price: 34000 },
    { id: 4, name: "Ноутбук HP K100-70 Aluminum White", quantity: 5, price: 34000 },
    { id: 5, name: "Ноутбук HP K100-70 Aluminum White", quantity: 5, price: 34000 },
  ];

function CardProducts(){
    return(
    <div className="box-info">
        {productInfo.map((product) => (
            <div key={product.id} className= "card-info">
            <img  src = {foto} alt ="product" className="card-foto"/>
            <p className="card-name">{product.name}</p>
            <div className="card-combo">
            <p className="card-price">{product.price}₴</p>
            <p className="card-quantity">Кількість:{product.quantity}</p>
            </div>
            <p className="card-buy">{<BsCart4/>} Готовий до відправки</p>
            </div>
))}
    </div>
    );
}

export default CardProducts;