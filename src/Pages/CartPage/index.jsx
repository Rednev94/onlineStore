import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyCard from "../../Components/EmptyCart";
import Button from "../../shared/Button";
import CartItems from "../../Components/cartItems";
import Price from "../../shared/price";
import style from "./cartPage.module.scss";

const CartPage = () => {
    let { items, totalPrice } = useSelector((state) => state.cartSlice);

    const navigate = useNavigate();

    if (!items.length) {
        return <EmptyCard />;
    }

    const cartItems = items.map((item) => <CartItems items={item} />);

    return (
        <>
            <div className={style.cart}>
                <h1>Корзина:</h1>
                <div className={style.container1}>
                    <div className={style.item}>Товар:</div>
                    <div className={style.itemCount}>Количество:</div>
                    <div className={style.itemPrice}>Цена:</div>
                </div>

                <div className={style.container2}>{cartItems}</div>
                <div className={style.cartRecap}>
                    <p>Итого: </p>

                    <Price price={totalPrice} />
                </div>
                <Button
                    onClick={() => navigate(`/cart/order`)}
                    buttonName={"Продолжить оформление заказа"}
                />
            </div>
        </>
    );
};

export default CartPage;
