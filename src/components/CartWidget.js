import React from "react";
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
    return (
        <>
            <BsCart3
                className="text-white font-serif text-lg hover:text-orange-600 duration-200"
                size={25}
            />
        </>
    );
};

export default CartWidget;
