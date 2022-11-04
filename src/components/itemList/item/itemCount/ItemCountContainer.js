import React from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ counter , setCounter}) => {


    return <ItemCount counter={counter} setCounter={setCounter} />;
};

export default ItemCountContainer;