import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import './Card.css';
import logo from "./rozetka.svg";
import { FaEye } from "react-icons/fa";

function Card() {
  return (
    <div className="card">
    <div className ="logo">
      <img src ={logo} alt="logo" />
    </div>
    <Input placeholder = "Enter Email" />
    <Input placeholder = "Enter Password" classDiv="container" icon={<FaEye className='eye'/>} />
    <Button classNam = "btn" text= "Login"/>
    </div>
  );
}

export default Card;