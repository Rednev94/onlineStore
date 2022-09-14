import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import style from "./orderPage.module.scss";

const OrderPage = () => {
    const refInputName = React.useRef();
    const refInputPhone = React.useRef();
    const refInputEmail = React.useRef();
    const navigate = useNavigate();

    const onClickOrder = () => {
        if (
            refInputName.current.value &&
            refInputPhone.current.value.length >= 11 &&
            refInputPhone.current.value.length <= 12 &&
            refInputEmail.current.value.includes("@")
        ) {
            refInputName.current.value = "";
            refInputPhone.current.value = "";
            refInputEmail.current.value = "";
            alert("Заказ отправлен");
        } else {
            alert("Введите корректные значения!");
        }
    };

    return (
        <div className={style.orderPage}>
            <h1>Оформление заказа</h1>
            <div className={style.orderContent}>
                <div className={style.orderInput}>
                    <input
                        ref={refInputName}
                        type="text"
                        placeholder="Введите имя..."
                    />
                    <input
                        ref={refInputPhone}
                        type="number"
                        placeholder="Введите номер телефона..."
                    />
                    <input
                        ref={refInputEmail}
                        type="email"
                        placeholder="Введите Email..."
                    />
                    <input type="text" placeholder="Комментарий к заказу..." />
                </div>
                <div className={style.orderButtons}>
                    <Button
                        buttonName={"Вернуться в корзину"}
                        onClick={() => navigate("/cart")}
                    />

                    <Button
                        buttonName={"Отправить заказ"}
                        onClick={onClickOrder}
                    />
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
