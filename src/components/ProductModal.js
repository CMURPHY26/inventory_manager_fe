import React, {useState} from 'react';

const productModal = (props) => {

    return (
        <div className="product-modal">
            <div className="product-form">
                <form action="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder="Absolut Vodka"/>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" placeholder="Add product description here"/>
                    <label htmlFor="item_type">Item Type:</label>
                    <input type="text" name="item_type" placeholder="Item Type"/>
                    <label htmlFor="qty">Qty:</label>
                    <input type="text" name="qty" placeholder="12"/>
                    <label htmlFor="price">Price: $</label>
                    <input type="text" name="price" placeholder="100"/>
                </form>
            </div>
        </div>
    )
}


export default productModal;