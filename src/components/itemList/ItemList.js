import React from "react";
import { Link } from "react-router-dom";

const Itemlist = ({ items }) => {
    console.log(items)
    return (
        <main className="grid grid-cols-4 gap-2 mx-auto">
            {items.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="w-[250px] mx-auto border-2 border-black text-center my-4"
                    >
                        <figure className="w-full border-b-2 bg-gray-300">
                            <img src={item.img} alt={item.name} />
                        </figure>
                        <div className="bg-gray-500 pb-2">
                            <h3 className="text-4xl text-center truncate font-signature overflow-hidden">
                                {item.name}
                            </h3>
                            <h4 className="text-2xl font-signature overflow-hidden">
                                {item.price}
                            </h4>
                            <button className="bg-gray-300 p-2 font-signature text-xl hover:bg-orange-600 duration-200">
                                <Link to={"/" + item.name + "/" + item.id}>
                                    VER MAS
                                </Link>
                            </button>
                        </div>
                    </div>
                );
            })}
        </main>
    );
};

export default Itemlist;
