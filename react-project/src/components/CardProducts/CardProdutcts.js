import "./CardProducts.css";
import { BsCart4 } from "react-icons/bs";


function CardProducts({product,onClick}){
    return(
            <div className= "card-info" onClick={() => onClick(product.id)}>
            <img  src = {product.foto} alt ="product" className="card-foto"/>
            <p className="card-name">{product.name}</p>
            <div className="card-combo">
            <p className="card-price">{product.price}₴</p>
            <p className="card-quantity">Кількість:{product.quantity}</p>
            </div>
            <p className="card-buy">{<BsCart4/>} Готовий до відправки</p>
            </div>
    );
}

export default CardProducts;