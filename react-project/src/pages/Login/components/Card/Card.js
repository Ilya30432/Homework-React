import "./Card.css";
import React, { useState } from "react";
import logo from "./rozetka.svg";
import Form from "../../../../components/Form/Form";

function Card() {
  return (
    <div className="cards">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Form />
    </div>
  );
}

export default Card;
