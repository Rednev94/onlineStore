import React from "react";
import style from "./button.module.scss";

const Button = ({ buttonName, onClick }) => {
    return (
        <div className={`${style.btn}`} onClick={onClick}>
            <span>{buttonName}</span>
        </div>
    );
};

export default Button;
