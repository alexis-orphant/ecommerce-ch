import React, { useState } from "react";
import ItemCountContainer from "./itemCount/ItemCountContainer";

const ItemDetail = ({ items }) => {
    const [counter, setCounter] = useState(1);

    return (
        <>
            {items.map((item) => {
                return (
                    <>
                        <div
                            key={item.id}
                            className="md:flex justify-center bg-neutral-300 gap-0 dark:bg-neutral-900 mx-10"
                        >
                            <figure className="shadow-xl md:mr-2 my-6 px-4 mx-auto shadow-black bg-neutral-300 dark:bg-neutral-700 ">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="mx-auto"
                                />
                            </figure>
                            <div className=" bg-neutral-300 text-2xl md:ml-2 my-6 px-4 mx-auto text-center shadow-xl shadow-black dark:bg-neutral-700 dark:text-white">
                                <h2 className="font-signature text-lg sm:text-xl md:text-3xl lg:text-6xl xl:text-7xl overflow-hidden">
                                    {item.name}
                                </h2>
                                <h3 className="font-bold text-xl sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl py-2 md:py-4 overflow-hidden">
                                    {item.price}
                                </h3>
                                    <ItemCountContainer
                                        counter={counter}
                                        setCounter={setCounter}
                                    />
                                    <button className="font-semibold text-lg lg:text-xl text-black bg-neutral-400 shadow-lg shadow-black p-2 hover:bg-orange-600 hover:shadow-xl hover:shadow-black/90 duration-200">
                                        ADD TO CART
                                    </button>
                            </div>
                        </div>
                        <div className="bg-transparent dark:text-white mx-auto px-9 overflow-hidden">
                            <h4 className=" text-center font-signature text-3xl bg-transparent overflow-hidden">
                                Description:
                            </h4>
                            <p className="text-center font-signature text-xl mx-auto max-w-[1000px] bg-transparent overflow-hidden">
                                {item.description}
                            </p>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default ItemDetail;
