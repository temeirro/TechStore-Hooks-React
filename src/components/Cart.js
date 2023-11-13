import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
export default function Cart(){
    
    const { state, dispatch } = useContext(ShopContext);

    

    const deleteFromCart = (c)=>{
        // setCart(cart.filter(item => item !== c));

        dispatch({ type: "DELETE_ITEM_FROM_CART", payload: c });

    }

    return(
        <>
        <div className="AllProducts">
        {state.cart.map((c) => (
                            <div className="ProductCard">
                               
                                <h3>{c.name}</h3>
                                <h3>{c.price}$</h3>
                                <p>type: {c.type}</p>
                                <img width={300} src={c.img}></img>
                                <button className="button-17" onClick={() => deleteFromCart(c)} >delete</button>
                               
                            </div>
                        ))}
        </div>
          
        </>
    );
}