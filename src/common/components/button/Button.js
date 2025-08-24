import React from "react";
import style from './Button.module.scss'


function Button({ text, disabled = false, type = "button", ...props }){
    if (type === "submit" || props.onClick) {
        return(
            <button 
                type={type}
                className={`${style.btn} ${disabled ? style.disabled : ''}`}
                disabled={disabled}
                {...props}
            >
                {text}
            </button>
        );
    }
    
    return(
        <a href="" className={style.btn} {...props}>{text}</a>
    );
}

export default Button;