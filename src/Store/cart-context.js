import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount : 0,
    addItem : (item) => {},
    removeIteam: (id) => {}

})

export default CartContext;