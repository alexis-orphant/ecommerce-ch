import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../../data/data.json";
import Loading from "../../Loading";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        if (id) {
            let simulacionPedidoFilter = new Promise((res) => {
                setTimeout(() => {
                    res(
                        data.filter((item) =>
                            item.id === id ? item : item.cat
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
    }, [id]);

    return (
        <>
            {items.length === 0 ? <Loading /> : <ItemDetail items={items} />}
        </>
    );
};

export default ItemDetailContainer;
