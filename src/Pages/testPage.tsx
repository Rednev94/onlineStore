import React from "react";
import Button from "../shared/button/Button";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import Input from "../shared/input/Input";
import ItemCard from "../shared/ItemCard/ItemCard";

const TestPage = () => {
    return (
        <>
            <Header />
            <ItemCard />
            <Input />
            <Input />
            <Input />
            <Button />
            <Footer />
        </>
    );
};

export default TestPage;
