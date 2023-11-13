import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";

export default function Menu(){
    const { state, dispatch } = useContext(ShopContext);

    return(
        <>
            <nav>
                <a><Link to ={'/'}>Shop {state.products.length}</Link></a>
                <a><Link to ={'/cart'}>Cart {state.cart.length}</Link></a>
            </nav>
        </>
    );
}