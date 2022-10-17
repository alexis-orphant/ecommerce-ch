import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header className="w-screen h-[80px] bg-black grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-4 items-center py-3 px-4">
            <div>
                <h2 className="text-white font-signature text-3xl">
                    <span className="text-orange-600 text-5xl">
                        Best
                    </span>{" "}
                    Commerce
                </h2>
            </div>

            <div className="hidden xl:block"></div>

            <div className="mx-auto hidden sm:block xl:justify-self-end">
                <ul className="flex justify-between">
                    <li className="px-2">
                        <a
                            href="#"
                            className="text-white font-serif text-lg hover:text-orange-600 duration-200"
                        >
                            Home
                        </a>
                    </li>
                    <li className="px-2">
                        <a
                            href="#"
                            className="text-white font-serif text-lg hover:text-orange-600 duration-200"
                        >
                            About
                        </a>
                    </li>
                    <li className="px-2">
                        <a
                            href="#"
                            className="text-white font-serif text-lg hover:text-orange-600 duration-200"
                        >
                            Products
                        </a>
                    </li>
                    <li className="px-2">
                        <a
                            href="#"
                            className="text-white font-serif text-lg hover:text-orange-600 duration-200"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            <div className="hidden xl:block "></div>


            <div className="justify-self-end">
                <CartWidget />
            </div>
        </header>
    );
};

export default NavBar;
