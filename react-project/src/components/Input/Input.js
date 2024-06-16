import "./Input.css";

function Input({placeholder,icon,classDiv, type}){
    return(
    <div className={classDiv}>
    <input  className = "input"  placeholder = {placeholder} type={type}  />
    {icon}
    </div>
    );
}

export default Input;