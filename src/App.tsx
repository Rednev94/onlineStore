import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import CatalogPage from "./Pages/CatalogPage";
import CategoryPage from "./Pages/CategoryPage";
import Info from "./Pages/Info";
import ItemPage from "./Pages/ItemPage";
import MainPage from "./Pages/MainPage";
import NonFound from "./Pages/NonFound";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/category/" element={<CategoryPage />} />
                <Route path="/catalog/" element={<CatalogPage />} />
                <Route path="/category/item/" element={<ItemPage />} />
                <Route path="/info" element={<Info />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NonFound />} />
            </Routes>
        </div>
    );
}

export default App;
