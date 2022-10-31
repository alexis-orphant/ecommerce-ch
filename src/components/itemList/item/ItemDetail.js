import React from "react";

const ItemDetail = ({items}) => {
    return <>
        {
            items.map((item)=>{
                return (
                    <main className="w-screen h-full dark:bg-gray-500">
                        <div
                            key={item.id}
                            className="grid grid-cols-4 gap-0 pt-2 px-4"
                        >
                            <figure className="col-start-1 col-end-3 mx-auto bg-gray-300 border-2 border-black ">
                                <img src={item.img} alt={item.name} />
                            </figure>
                            <div className="mx-auto col-start-4 col-end-4 pb-2">
                                <h2 className="font-signature text-7xl overflow-hidden">
                                    {item.name}
                                </h2>
                                <h3 className="font-bold text-4xl py-4 overflow-hidden">
                                    {item.price}
                                </h3>
                                <button className="font-semibold text-xl  bg-gray-300 p-2 hover:bg-orange-600 duration-200">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                        <div className="bg-gray-300 mt-2 pt-2">
                            <h4 className=" text-center font-signature text-xl">Description:</h4>
                            <p className="text-center px-6 font-signature text-xl">
                            {item.description}
                        </p>
                        </div>
                    </main>
                );
            })
        }
    </>;
};

export default ItemDetail;
