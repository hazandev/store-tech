import React, {useState} from "react";
import {productService} from "../../services/productService";
export const ProductList = () => {
    const products = productService.query(); 
    return (
        <div>
            <h1>Product List</h1>
            {products.map( product =>
                <div>
                    <h2>{product.name}</h2>
                    <img src={product.img} alt="" />
                </div>
            )}
        </div>
    )
}
