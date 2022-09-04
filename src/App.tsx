import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./Pages/categoriesPage";
import MainPage from "./Pages/MainPage";
import NonFound from "./Pages/NonFound";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/category/" element={<CategoryPage />} />
                <Route path="*" element={<NonFound />} />
            </Routes>
        </div>
    );
}

export default App;
