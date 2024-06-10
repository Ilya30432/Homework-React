import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import "./Card.css";
import React, { useState } from "react";
import logo from "./rozetka.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

function Card() {
  const [inputType, setInputType] = useState("password");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const changeInputTypeHandler = () => {
    setInputType((prevType) => (prevType === "text" ? "password" : "text"));
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="card">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Input placeholder="Enter Email" type="text" />
      <Input
        placeholder="Enter Password"
        classDiv="container"
        type={inputType}
        icon={
          isPasswordVisible ? (
            <FaEye className="eye" onClick={changeInputTypeHandler} />
          ) : (
            <FaEyeSlash className="eye" onClick={changeInputTypeHandler} />
          )
        }
      />
      <Button className="btn" text="Login" />
    </div>
  );
}

export default Card;
