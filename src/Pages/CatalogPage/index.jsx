import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ItemCard from "../../Components/ItemCard";
import Loader from "../../shared/loader";
import { fetchItems } from "../../store/itemSlice";
import style from "./catalogPage.module.scss";

const CatalogPage = () => {
    const { goodsType } = useParams();
    const { items, itemsStatus } = useSelector((state) => state.itemSlice);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchItems(goodsType));
    }, []);

    const itemCards = items.map((item) => (
        <ItemCard key={item.id} {...item} type={goodsType} />
    ));

    if (itemsStatus === "Server Error") {
        return <h1 className={style.catalog}>{itemsStatus}</h1>;
    }
    return (
        <>
            {itemsStatus === "Loading" ? (
                <Loader />
            ) : (
                <div className={style.catalog}>
                    <h1> Каталог товаров:</h1>
                    <div className={style.container}>
                        <div className={style.itemCard}>{itemCards}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CatalogPage;
