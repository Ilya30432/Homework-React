import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import './Card.css';
import logo from "./rozetka.svg";

function Card() {
  return (
    <div className="card">
    <div className ="logo">
        <img src ={logo} alt="logo" ></img>
    </div>
    <Input placeholder = "Enter Email" />
    <Input placeholder = "Enter Password" />
    <Button />
    </div>
  );
}

export default Card;