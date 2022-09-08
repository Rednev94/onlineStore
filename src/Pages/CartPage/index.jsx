import React from "react";
import Button from "../../shared/button/Button";
import Counter from "../../shared/Counter";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import style from "./CartPage.module.scss";

const CartPage = () => {
    return (
        <>
            <Header />
            <div className={style.cart}>
                <h1>Корзина:</h1>
                <div className={style.container1}>
                    <div className={style.item}>Товар:</div>
                    <div className={style.itemCount}>Количество:</div>
                    <div className={style.itemPrice}>Цена:</div>
                </div>

                <div className={style.container2}>
                    <div className={style.item}>
                        <div>Какой то img</div>
                    </div>
                    <div className={style.itemCount}>
                        <Counter />
                        <div>Очистить</div>
                    </div>
                    <div className={style.itemPrice}>
                        <div>цена товара</div>
                    </div>
                </div>
                <div className={style.cartRecap}>
                    <p>Итого: </p>
                    <p>Цена</p>
                </div>
                <Button buttonName={"Продолжить оформление заказа"} />
            </div>
            <Footer />
        </>
    );
};

export default CartPage;
