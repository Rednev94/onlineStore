import React from "react";
import { useDispatch } from "react-redux";
import { changeCount, removeItem } from "../../store/cartSlice";
import Counter from "../../shared/Counter";
import Price from "../../shared/price";
import style from "./cartItems.module.scss";

const CartItems = ({ items }) => {
    const dispatch = useDispatch();

    const setCountOnClick = (newCount) => {
        dispatch(changeCount({ id: items.id, newCount: newCount }));
    };

    return (
        <div className={style.cartContent} key={items.id}>
            <div className={style.item}>
                <img
                    className={style.itemImage}
                    src={items.imageUrl[0]}
                    alt=""
                />
                <div>
                    <div>{items.title}</div>
                    <Price price={items.price} />
                </div>
            </div>
            <div className={style.itemCount}>
                <Counter count={items.count} setCount={setCountOnClick} />
                <div
                    className={style.removeItem}
                    onClick={() => {
                        dispatch(removeItem(items.id));
                    }}
                >
                    Очистить
                </div>
            </div>
            <div className={style.itemPrice}>
                <Price price={items.price * items.count} />
            </div>
        </div>
    );
};
export default CartItems;
