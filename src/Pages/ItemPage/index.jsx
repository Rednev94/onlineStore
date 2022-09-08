import React from "react";
import Button from "../../shared/button/Button";
import Counter from "../../shared/Counter";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import style from "./ItemPage.module.scss";

const ItemPage = () => {
    return (
        <>
            <Header />
            <div className={style.ItemPage}>
                <div className={style.slides}>
                    <img
                        src="https://sun9-53.userapi.com/impg/MjPbxsM4RDx6kkZ0wKKirEGpavBjIiw8rQ_kaQ/VO4rTTt7Nro.jpg?size=1620x2160&quality=95&sign=cc1dbefeeb05e0130324710c0f174fa1&type=album"
                        alt=""
                    />
                    <img
                        src="https://sun9-54.userapi.com/impg/vbVUvH0e8v1QZKiPVFLvBiLFdXm0megYxm1neQ/VFACAfcIqUg.jpg?size=1620x2160&quality=95&sign=d5a0aa98d5a2c7af944df87d3c6fd2ce&type=album"
                        alt=""
                    />
                </div>

                <img
                    className={style.itemImage}
                    src="https://sun9-81.userapi.com/impg/JgVpA2RJWpm0wAMdL5Q4wKsmAkaBT_2Pev6-fQ/vxc0ar-rBOw.jpg?size=1620x2160&quality=95&sign=8d2714b4be4c30124f90df7e3637dab6&type=album"
                    alt=""
                />

                <div className={style.info}>
                    <h1>Название</h1>
                    <p className={style.price}>Цена</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repudiandae sunt ipsum sapiente quam nisi quas,
                        facere labore delectus, minima eligendi vitae deleniti,
                        placeat rerum vero praesentium fugit dolor quae.
                        Voluptatum?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repudiandae sunt ipsum sapiente quam nisi quas,
                        facere labore delectus, minima eligendi vitae deleniti,
                        placeat rerum vero praesentium fugit dolor quae.
                        Voluptatum?
                    </p>

                    <Counter />
                    <Button buttonName={"Добавить в корзину"} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ItemPage;
