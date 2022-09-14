import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import style from "./categoryCard.module.scss";

const CategoryCard = (props) => {
    const navigate = useNavigate();
    const { title, titleEn, imageUrl } = props;

    const handlerOnClick = () => {
        navigate(`/category/${titleEn}`);
    };

    return (
        <div className={style.card}>
            <div
                className={style.background}
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className={style.info}>
                <div className={style.categoryTitle}>{title}</div>
                <Button
                    buttonName={"Посмотреть товары"}
                    onClick={handlerOnClick}
                />
            </div>
        </div>
    );
};

export default CategoryCard;
