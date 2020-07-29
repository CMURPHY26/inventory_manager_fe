import React, {useState, useEffect} from 'react';

const ProductModal = (props) => {
    const {setProductModalVisible, product} = props;
    const [name, setName] = useState("");

    useEffect(() => {
        if(product !== null) {
            setName(product.name);
        }

    }, []) 
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="product-modal">
            <div className="product-form">
            <div className="close-form" onClick={() => setProductModalVisible(false)}>X</div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={product ? name : null} onChange={(event) => setName(event.target.value)}/>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" placeholder="Add product description here"/>
                    <label htmlFor="item_type">Item Type:</label>
                    <input type="text" name="item_type" placeholder="Item Type"/>
                    <label htmlFor="qty">Qty:</label>
                    <input type="text" name="qty" placeholder="12"/>
                    <label htmlFor="price">Price: $</label>
                    <input type="text" name="price" placeholder="100"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}


export default ProductModal;