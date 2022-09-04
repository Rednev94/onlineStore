import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import style from "./NonFound.module.scss";

const NonFound = () => {
    return (
        <>
            <Header />
            <div className={style.nonFound}>
                <img
                    className={style.img}
                    src="https://cdn-icons-png.flaticon.com/512/1234/1234541.png"
                    alt="Ошибка 404"
                />
                <div className={style.info}>
                    <h1>404 СТРАНИЦА НЕ НАЙДЕНА</h1>
                    <p>
                        Извините, но такой страницы нет на нашем сайте. <br />
                        Возможно вы ввели не правильный адрес, или страница была
                        удалена. <br />
                        Попробуйте вернуться на <Link to="/">Главную.</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default NonFound;
