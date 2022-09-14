import React from "react";
import Info from "../Info";
import style from "./mainPage.module.scss";

const MainPage = () => {
    const mainImg = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
    const [currentImg, setCurrentImg] = React.useState(mainImg[0]);

    const toggle = mainImg.map((elem) => (
        <div
            key={elem}
            className={style.toggle}
            onClick={() => setCurrentImg(elem)}
        ></div>
    ));

    return (
        <div className={style.mainPage}>
            <div className={style.slide}>
                <img className={style.mainImg} src={currentImg} alt="" />
                <div className={style.toggleContainer}>{toggle}</div>
            </div>
            <Info />
        </div>
    );
};

export default MainPage;
