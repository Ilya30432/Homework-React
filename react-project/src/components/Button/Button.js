import "./Button.css";


function Button({className , icon , text,onClick}){
    return(
    <button onClick={onClick} className = {className} > {icon}{text}</button>
    );
}

export default Button;