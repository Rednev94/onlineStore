import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import style from "./Header.module.scss";
import { setCurrentCurrency, addExchangeRates } from "../../store/cartSlice";

const Header = () => {
    const { totalCount } = useSelector((state) => state.cartSlice);
    const navigate = useNavigate();
    const currencies = ["RUB", "USD", "EUR", "CNY"];
    const currentCurrency = useSelector(
        (state) => state.cartSlice.currentCurrency
    );
    const dispatch = useDispatch();
    const filterСurrencies = currencies.filter(
        (elem) => elem !== currentCurrency
    );

    React.useEffect(() => {
        axios
            .get(
                "https://api.currencyapi.com/v3/latest?apikey=83cD88Ujqp74fawDm6j6kVqLKbFj0H36jLH9p3kG"
            )
            .then((response) => dispatch(addExchangeRates(response.data.data)))
            .catch((response) => console.log(response));
    }, []);

    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_components1}>
                    <Link to="/">Главная</Link>
                    <Link to="/category">Каталог</Link>
                    <Link to="/info">О нас</Link>
                </div>
                <img
                    className={style.logo}
                    onClick={() => navigate("/")}
                    src="https://cdn.shopify.com/s/files/1/2786/9162/files/LKG-outline_5ba974c0-3eae-498d-b336-91cb38c01628_100x.png?v=1539268058"
                    alt="Logo"
                />
                <div className={style.header_components2}>
                    <div className={style.menu_list}>
                        {currentCurrency}
                        <ul>
                            {filterСurrencies.map((value, id) => (
                                <li
                                    key={id}
                                    onClick={() =>
                                        dispatch(setCurrentCurrency(value))
                                    }
                                >
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        onClick={() => navigate("/cart")}
                        className={style.cart}
                    >
                        <div>Корзина</div>
                        <img
                            className={style.cartImage}
                            src="https://cdn-icons-png.flaticon.com/512/2696/2696198.png"
                            alt="cart"
                        />
                        {totalCount > 0 && (
                            <div className={style.counter}>{totalCount}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
