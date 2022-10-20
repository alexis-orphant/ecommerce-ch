import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header className="w-screen h-[80px] bg-white shadow-sm shadow-black dark:bg-black grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-4 items-center py-3 px-4">
            <div>
                <h2 className="text-black dark:text-white font-signature text-3xl">
                    <span className="text-orange-600 text-5xl">
                        Best
                    </span>{" "}
                    Commerce
                </h2>
            </div>

            <div className="hidden xl:block"></div>

            <nav className="mx-auto hidden sm:block xl:justify-self-end">
                <ul className="flex justify-between">
                    <li className="px-2">
                        <a
                            href="#"
                            className="text-black dark:text-white font-serif text-lg hover:text-orange-600 duration-200"
                        >
                            Buzos
                        </a>
                    </li>
                    <li className="px-2">
                        <a
                            href="#"
                            className="text-black dark:text-white font-serif text-lg hover:text-orange-600 duration-200"
                        >
                            Jeans
                        </a>
                    </li>
                    <li className="px-2">
                        <a
                            href="#"
                            className="text-black dark:text-white font-serif text-lg hover:text-orange-600 duration-200"
                        >
                            Remeras
                        </a>
                    </li>
                    <li className="px-2">
                        <a
                            href="#"
                            className="text-black dark:text-white font-serif text-lg hover:text-orange-600 duration-200"
                        >
                            Zapatillas
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="hidden xl:block "></div>


            <div className="justify-self-end">
                <CartWidget />
            </div>
        </header>
    );
};

export default NavBar;
