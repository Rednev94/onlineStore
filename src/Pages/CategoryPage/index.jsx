import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../Components/categoryCard";
import axios from "axios";
import { addCategory } from "../../store/itemSlice";
import style from "./categoryPage.module.scss";
import Loader from "../../shared/loader";

const CategoryPage = () => {
    const category = useSelector((state) => state.itemSlice.category);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        axios
            .get("https://63109c8936e6a2a04ef2ddc9.mockapi.io/Category")
            .then((response) =>
                dispatch(addCategory(response.data), setIsLoading(false))
            )
            .catch((response) => console.log(response));
    }, []);

    const categoryCards = category.map((obj) => (
        <CategoryCard key={obj.id} {...obj} />
    ));

    return (
        <>
            {isLoading ? (
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
