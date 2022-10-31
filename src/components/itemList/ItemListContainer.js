import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import Itemlist from "./ItemList";
import data from "../../data/data.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { category } = useParams();
    
    useEffect(() => {
        if (category) {
            let simulacionPedidoFilter = new Promise((res) => {
                setTimeout(() => {
                    res(
                        data.filter((item) =>
                            item.category === category ? item : item.cat
                        )
                    );
                }, 2000);
            });

            simulacionPedidoFilter
                .then((respuesta) => {
                    setItems(respuesta);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            let simulacionPedido = new Promise((res) => {
                setTimeout(() => {
                    res(data);
                }, 2000);
            });

            simulacionPedido
                .then((respuesta) => {
                    setItems(respuesta);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [category]);
    return (
        <section className="w-screen h-full bg-gray-200 dark:bg-gray-900">
            {items.length === 0 ? <Loading /> : <Itemlist items={items} />}
        </section>
    );
};

export default ItemListContainer;