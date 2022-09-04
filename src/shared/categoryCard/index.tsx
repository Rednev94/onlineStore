import React from "react";
import style from "./CategoryCard.module.scss";

const CategoryCard = () => {
    return (
        <div className={style.card}>
            <div className={style.background}></div>
            <p>ПЕРЕМЕННАЯ С НАЗВАНИЕ КАТАЛОГА</p>
            <button>Посмотреть товары</button>
        </div>
    );
};

export default CategoryCard;
