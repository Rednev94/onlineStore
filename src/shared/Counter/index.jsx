import React from "react";
import style from "./Counter.module.scss";

const Counter = () => {
    return (
        <div className={style.count}>
            <div className={style.countButton}>-</div>
            <div>123</div>
            <div className={style.countButton}>+</div>
        </div>
    );
};

export default Counter;
