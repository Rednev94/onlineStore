import React from "react";
import { Link } from "react-router-dom";
import style from "./ItemCard.module.scss";

const ItemCard = () => {
    return (
        <div className={style.itemCard}>
            <img
                src="https://cdn.shopify.com/s/files/1/2786/9162/products/image_5fbd3971-4130-42a1-9d2a-28b8a85bbbca_600x.jpg?v=1651326671"
                alt=""
            />
            <Link to="/">Название</Link>
            <p>Цена</p>
        </div>
    );
};

export default ItemCard;
