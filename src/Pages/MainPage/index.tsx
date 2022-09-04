import React from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import style from "./mainPage.module.scss";

const MainPage = () => {
    return (
        <div className={style.main_page}>
            <Header />
            <div className={style.cont}></div>
            <Footer />
        </div>
    );
};

export default MainPage;
