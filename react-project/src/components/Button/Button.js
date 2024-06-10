import "./Button.css";



function Button({classNam , icon , text}){
    return(
    <button className = {classNam} > {icon}{text}</button>
    );
}

export default Button;