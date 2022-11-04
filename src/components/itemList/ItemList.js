import React from "react";
import { Link } from "react-router-dom";

const Itemlist = ({ items }) => {
    console.log(items)
    return (
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto">
            {items.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="w-[250px] mx-auto  text-center my-4 shadow-xl shadow-black"
                    >
                        <figure className="w-full border-b-2 border-black bg-neutral-300 dark:bg-neutral-700">
                            <img src={item.img} alt={item.name} />
                        </figure>
                        <div className="bg-neutral-300 pb-2 dark:bg-neutral-700">
                            <h3 className="text-2xl text-center font-signature overflow-hidden">
                                {item.name}
                            </h3>
                            <h4 className="text-2xl font-signature overflow-hidden">
                                {item.price}
                            </h4>
                            <button className="bg-neutral-400 p-2 font-signature text-xl hover:bg-orange-600 shadow-lg shadow-black duration-200">
                                <Link to={"/item/" + item.id}>
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
