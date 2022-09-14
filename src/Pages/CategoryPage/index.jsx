import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../Components/categoryCard";
import { fetchCategory } from "../../store/itemSlice";
import style from "./categoryPage.module.scss";
import Loader from "../../shared/loader";

const CategoryPage = () => {
    const { category, categoryStatus } = useSelector(
        (state) => state.itemSlice
    );
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchCategory());
    }, []);

    const categoryCards = category.map((obj) => (
        <CategoryCard key={obj.id} {...obj} />
    ));

    if (categoryStatus === "Server Error") {
        return <h1 className={style.category}>{categoryStatus}</h1>;
    }

    return (
        <>
            {categoryStatus === "Loading" ? (
                <Loader />
            ) : (
                <div className={style.category}>
                    <h1>ВСЕ КАТЕГОРИИ</h1>
                    <div className={style.categoryCard}>{categoryCards}</div>
                </div>
            )}
        </>
    );
};

export default CategoryPage;
