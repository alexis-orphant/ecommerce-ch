import React from "react";
import ItemListContainer from "./components/itemList/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/itemList/item/ItemDetailContainer";
import CartContainer from "./components/cart/CartContainer";

function App() {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<ItemListContainer />} />

                <Route
                    path="/category/:category"
                    element={<ItemListContainer />}
                />

                <Route path="/item/:id" element={<ItemDetailContainer />} />

                <Route path="/cart" element={<CartContainer/>} />

                <Route path="*" element={<h3>la pag no esta creada</h3>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
