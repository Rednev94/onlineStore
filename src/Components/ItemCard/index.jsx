import React from "react";
import { useNavigate } from "react-router-dom";
import Price from "../../shared/price";
import style from "./ItemCard.module.scss";

const ItemCard = (props) => {
    const { id, imageUrl, title, price, type } = props;
    const navigate = useNavigate();
    const handlerOnClick = () => {
        navigate(`/category/${type}/${id}`);
    };

    return (
        <div className={style.itemCard}>
            <div className={style.clickContainer} onClick={handlerOnClick}>
                <div className={style.itemImg}>
                    <img className={style.itemImg1} src={imageUrl[0]} alt="" />
                    <img className={style.itemImg2} src={imageUrl[1]} alt="" />
                </div>
                <p>{title}</p>
            </div>
            <Price price={price} />
        </div>
    );
};

export default ItemCard;
