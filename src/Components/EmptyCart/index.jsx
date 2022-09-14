import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import style from "./emptyCart.module.scss";

const EmptyCard = () => {
    const navigate = useNavigate();
    return (
        <div className={style.emptyCard}>
            <img
                src="https://www.svgrepo.com/show/359440/cart-remove.svg"
                alt=""
            />
            <div className={style.emptyCardInfo}>В корзине нет товаров</div>
            <div>Найдите то, что вам нужно в каталоге</div>
            <Button
                buttonName={"Вернуться к покупкам"}
                onClick={() => navigate(`/category/`)}
            />
        </div>
    );
};

export default EmptyCard;
