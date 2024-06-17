import "./Input.css";

function Input({ isErorr, name, onInputChange, value, placeholder, icon, classDiv, type }) {
  return (
    <div className={classDiv}>
      <input
        name={name}
        value={value}
        onChange={(event) => onInputChange(event.target.value)}
        className= {`input ${isErorr && "input-erorr "}`}
        placeholder={placeholder}
        type={type}
      />
      {icon}
    </div>
  );
}

export default Input;
