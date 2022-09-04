import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div>
                    <p>Мы в социальных сетях:</p>
                    <img
                        src="https://30ahtub-acdt.edusite.ru/images/63824b98b9e60b686ff86b336abf450f.png"
                        alt=""
                    />
                </div>
                <div>
                    <img src="" alt="Логотип" />
                    <p>г.Нижний Новгород</p>
                </div>
                <div>
                    <p>Контакты:</p>
                    <p>Viber/WhatsApp/Telegram:</p>
                    <p>+79087412723</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
