import React from "react";
import style from "./footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div>
                    <p>Мы в социальных сетях:</p>
                    <a href="https://vk.com/club154888228">
                        <img
                            src="https://30ahtub-acdt.edusite.ru/images/63824b98b9e60b686ff86b336abf450f.png"
                            alt=""
                        />
                    </a>
                </div>
                <Link to="/">LITTLE KING</Link>
                <div>
                    <p>Контакты:</p>
                    <p>Viber/WhatsApp/Telegram:</p>
                    <p>+79999999999</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
