import "./Input.css";

function Input({placeholder,icon,classDiv}){
    return(
    <div className={classDiv}>
    <input type = "text" className = "input"  placeholder = {placeholder} />
    {icon}
    </div>
    );
}

export default Input;