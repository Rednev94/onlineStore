import React from "react";
import { useSelector } from "react-redux";
import style from "./price.module.scss";

const Price = ({ price }) => {
    const { currentCurrency, exchangeRates } = useSelector(
        (state) => state.cartSlice
    );

    if (currentCurrency === "USD") {
        return (
            <div className={style.price}>
                {Math.round(price / exchangeRates.rub.value)}{" "}
                <img
                    src="https://www.svgrepo.com/show/61083/dollar.svg"
                    alt=""
                />
            </div>
        );
    }
    if (currentCurrency === "EUR") {
        return (
            <div className={style.price}>
                {Math.round(
                    (price / exchangeRates.RUB.value) * exchangeRates.EUR.value
                )}{" "}
                <img
                    src="https://www.svgrepo.com/show/203902/euro.svg"
                    alt=""
                />
            </div>
        );
    }
    if (currentCurrency === "CNY") {
        return (
            <div className={style.price}>
                {Math.round(
                    (price / exchangeRates.RUB.value) * exchangeRates.CNY.value
                )}{" "}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/516/516979.png"
                    alt=""
                />
            </div>
        );
    }

    return (
        <div className={style.price}>
            {price}{" "}
            <img
                src="https://www.svgrepo.com/show/314565/ruble-sign-solid.svg"
                alt=""
            />
        </div>
    );
};

export default Price;
