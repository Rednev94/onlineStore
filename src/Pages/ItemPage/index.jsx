import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../shared/Button";
import Counter from "../../shared/Counter";
import style from "./ItemPage.module.scss";
import { addItems } from "../../store/cartSlice";
import axios from "axios";
import Price from "../../shared/price";

const ItemPage = () => {
    const dispatch = useDispatch();
    const [focusImg, setFocusIMG] = React.useState(0);
    const [count, setCount] = React.useState(1);

    const { itemID } = useParams();

    const currentItem = useSelector((state) => state.itemSlice.item).find(
        (item) => item.id === +itemID
    );

    const onClickAddToCart = () => {
        dispatch(addItems({ ...currentItem, count: count }));
    };

    return (
        <>
            <div className={style.ItemPage}>
                <div className={style.slides}>
                    {currentItem.imageUrl.map((img, i) => (
                        <img
                            key={img}
                            onClick={() => setFocusIMG(i)}
                            src={img}
                            alt=""
                        />
                    ))}
                </div>

                <img
                    className={style.itemImage}
                    src={currentItem.imageUrl[focusImg]}
                    alt="Leather item"
                />

                <div className={style.info}>
                    <div>
                        <h1>{currentItem.title}</h1>
                        <div className={style.price}>
                            <Price price={currentItem.price} />
                        </div>
                        <div className={style.description}>
                            {currentItem.description}
                        </div>
                    </div>
                    <div>
                        <Counter count={count} setCount={setCount} />
                        <Button
                            buttonName={"Добавить в корзину"}
                            onClick={onClickAddToCart}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemPage;
