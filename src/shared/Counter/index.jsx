import React from "react";
import style from "./counter.module.scss";

const Counter = ({ count, setCount }) => {
    return (
        <div className={style.count}>
            <div
                className={style.countButton}
                onClick={() => {
                    if (count > 1) setCount(count - 1);
                }}
            >
                -
            </div>
            <div>{count}</div>
            <div
                className={style.countButton}
                onClick={() => setCount(count + 1)}
            >
                +
            </div>
        </div>
    );
};

export default Counter;
