import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
export default function Shop(){
    
    const { state, dispatch } = useContext(ShopContext);

    const addToCart = (p)=>{
        // let productToAdd = { ...p };
        // setCart((prevCart) => [...prevCart, productToAdd]);
        // console.log(cart);
        const newItem = { ...p, cartId: state.cart.length + 1 };
        dispatch({ type: "ADD_ITEM_TO_CART", payload: newItem });

    }

    return(
        <>
        <div className="AllProducts">
        {state.products.map((p) => (
                            <div className="ProductCard" key={p.id}>
                               
                                <h3>{p.name}</h3>
                                <h3>{p.price}$</h3>
                                <p>type: {p.type}</p>
                                <img width={300} src={p.img}></img>
                                <button className="button-17" onClick={() => addToCart(p)} >add to cart</button>
                               
                            </div>
                        ))}
        </div>
          
        </>
    );
}