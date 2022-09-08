import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import style from "./CategoryCard.module.scss";

const CategoryCard = () => {
    return (
        <div className={style.card}>
            <div className={style.background}></div>
            <div className={style.info}>
                <p>ПЕРЕМЕННАЯ С НАЗВАНИЕ КАТАЛОГА</p>
                <Link to="/catalog/">
                    <Button buttonName={"Посмотреть товары"} />
                </Link>
            </div>
        </div>
    );
};

export default CategoryCard;
