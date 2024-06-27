import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import "./Form.css";

const Form = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const changeInputTypeHandler = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const validForm = () => {
    if (!name.trim()) setIsNameEmpty(true);
    if (!password.trim()) setIsPasswordEmpty(true);

    return name.trim() && password.trim();
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validForm();
    if (!isValid) {
      return null;
    }
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Data is not valid");
      }

      const data = await response.json();
      localStorage.setItem("jwt", data.jwt);
      setErrorMessage(false);
    } catch (error) {
      setErrorMessage(true);
    }
  };

  return (
    <form onSubmit={HandleSubmit} className="form">
      <Input
        onInputChange={(value) => {
          setName(value);
          setIsNameEmpty(false);
        }}
        placeholder="Enter Email"
        type="text"
        name="name"
        value={name}
        isErorr={isNameEmpty}
      />
      {isNameEmpty && <div className="error">Please enter the name</div>}
      <Input
        isErorr={isPasswordEmpty}
        value={password}
        onInputChange={(value) => {
          setPassword(value);
          setIsPasswordEmpty(false);
        }}
        name="password"
        placeholder="Enter Password"
        classDiv="container"
        type={isPasswordVisible ? "text" : "password"}
        icon={
          isPasswordVisible ? (
            <FaEye className="eye" onClick={changeInputTypeHandler} />
          ) : (
            <FaEyeSlash className="eye" onClick={changeInputTypeHandler} />
          )
        }
      />
      {isPasswordEmpty && (
        <div className="error">Please enter the password</div>
      )}
      <Button className="btn" text="Login" />
      {errorMessage && <div className="error">Data is not valid</div>}
    </form>
  );
};

export default Form;
