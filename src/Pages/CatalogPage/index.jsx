import React from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import ItemCard from "../../shared/ItemCard/ItemCard";

const CatalogPage = () => {
    return (
        <div>
            <Header />
            <div> Каталог товаров:</div>
            <ItemCard />
            <Footer />
        </div>
    );
};

export default CatalogPage;
