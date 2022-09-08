import React from "react";
import style from "./Button.module.scss";

const Button = ({ buttonName }) => {
    return (
        <div className={`${style.btn}`}>
            <span>{buttonName}</span>
        </div>
    );
};

export default Button;
