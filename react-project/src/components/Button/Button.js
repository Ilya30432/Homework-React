import "./Button.css";



function Button({className , icon , text}){
    return(
    <button className = {className} > {icon}{text}</button>
    );
}

export default Button;