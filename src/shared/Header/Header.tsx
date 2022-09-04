import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header = () => {
    const currency = ["RUB", "USD", "EUR", "CNY"];

    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_components1}>
                    <Link to="/">Главная</Link>
                    <Link to="/category">Каталог</Link>
                    <Link to="/">О нас</Link>
                </div>
                <img
                    src="https://cdn.shopify.com/s/files/1/2786/9162/files/LKG-outline_5ba974c0-3eae-498d-b336-91cb38c01628_100x.png?v=1539268058"
                    alt=""
                />
                <div className={style.header_components2}>
                    <p className={style.menu_list}>
                        RUB
                        <ul>
                            {currency.map((value) => (
                                <li>{value}</li>
                            ))}
                        </ul>
                    </p>
                    <div className={style.card}>
                        <span>Корзина</span>{" "}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2696/2696198.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
