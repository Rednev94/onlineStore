import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ItemCard from "../../Components/ItemCard";
import Loader from "../../shared/loader";
import { addItems } from "../../store/itemSlice";
import style from "./catalogPage.module.scss";

const CatalogPage = () => {
    const { goodsType } = useParams();
    const items = useSelector((state) => state.itemSlice.item);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        axios
            .get(`https://63109c8936e6a2a04ef2ddc9.mockapi.io/${goodsType}`)
            .then((response) => {
                dispatch(addItems(response.data), setIsLoading(false));
            })
            .catch((response) => console.log(response));
    }, []);

    const itemCards = items.map((item) => (
        <ItemCard key={item.id} {...item} type={goodsType} />
    ));

    return (
        <>
            {isLoading ? (
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
