import React from "react";
import CategoryCard from "../shared/categoryCard";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const CategoryPage = () => {
    return (
        <div>
            <Header />
            <CategoryCard />
            <div>Категории</div>
            <Footer />
        </div>
    );
};

export default CategoryPage;
