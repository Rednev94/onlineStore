import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import CatalogPage from "./Pages/CatalogPage";
import CategoryPage from "./Pages/CategoryPage";
import Info from "./Pages/Info";
import ItemPage from "./Pages/ItemPage";
import MainPage from "./Pages/MainPage";
import NonFound from "./Pages/NonFound";
import OrderPage from "./Pages/OrderPage";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

function App() {
    return (
        <div className="main">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/category/" element={<CategoryPage />} />
                    <Route
                        path="/category/:goodsType"
                        element={<CatalogPage />}
                    />
                    <Route
                        path="/category/:goodsType/:itemID"
                        element={<ItemPage />}
                    />
                    <Route path="/info" element={<Info />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/cart/order" element={<OrderPage />} />
                    <Route path="*" element={<NonFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
