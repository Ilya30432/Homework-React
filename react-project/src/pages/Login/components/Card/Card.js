import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import "./Card.css";
import React, { useState } from "react";
import logo from "./rozetka.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import Form from "../../../../components/Form/Form";

function Card() {
  return (
    <div className="card">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Form />
    </div>
  );
}

export default Card;
