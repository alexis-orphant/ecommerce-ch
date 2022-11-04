import React from "react";

const ItemCount = ({ counter, setCounter }) => {
    const sumar = () => {
        if (counter < 5) {
            setCounter(counter + 1);
        }
    };

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <div className="mx-auto">
            <h4 className="font-signature text-4xl py-2">
                Select the quantity:
            </h4>
            <div className="flex justify-center text-center my-4 ">
                <button onClick={restar} className="bg-neutral-400 mb-6 shadow-lg shadow-black text-black mx-2 px-2 hover:bg-orange-600 hover:shadow-xl hover:shadow-black duration-200">-</button>
                <h5 className="mx-4 font-signature mb-6 text-4xl overflow-hidden">{counter}</h5>
                <button onClick={sumar} className="bg-neutral-400 mb-6 shadow-lg shadow-black text-black mx-2 px-2 hover:bg-orange-600 hover:shadow-xl hover:shadow-black duration-200">+</button>
            </div>
        </div>
    );
};

export default ItemCount;
