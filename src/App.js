import React, {useState, useEffect} from 'react';
import './App.scss';
import {CSSTransition} from 'react-transition-group';
import SideBar from './components/SideBar'
import ProductModal from './components/ProductModal'


  

const App = () => {
  const [products, setProducts] = useState("");
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [productModalVisible, setProductModalVisible] = useState(false);
  const [product, setProduct] = useState(null)

  const getInventory = () => {
    fetch("http://localhost:3003/products")
    .then( data => {
      return data.json()
    })
    .then(parsedData => {
      setProducts(parsedData);
    })
  }
  
  useEffect( () => {
    getInventory()
  }, [])

  const toggleSideBar = (event) => {
    // console.log(event.currentTarget)
    let x = event.currentTarget;
    x.classList.toggle("change");
    setSideBarVisible(!sideBarVisible);
  }

  const toggleProductModal = (event,product) => {
    if(product !== "" || null) {
      setProduct(product);
    }
    console.log(event.currentTarget, product)
    setProductModalVisible(!productModalVisible);
  }

  return (
    <div className="App">
      <nav>
        <img src="img/InventoryIQLogo.png" alt="InventoryIQ Logo" width="200"/>
        <div className="menu-icon-container" onClick={(event) => toggleSideBar(event)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>   
      <div className="product-container">
      {productModalVisible ?
          <ProductModal setProductModalVisible={toggleProductModal} product={product !== null || "" ? product : null  }></ProductModal>
        : null}
        {products ? products.map(product => (
          <div className="product" key={product._id} onClick={(event) =>toggleProductModal(event,product)}>
            <h1>{product.name}</h1>
            <h4>Description: {product.description}</h4>
            <h5>Type: {product.item_type}</h5>
            <div className="qty-price">
              <div className="qty">
                  Qty:<br />
                  {product.qty}
              </div>
              <div className="price">
                Price:<br />
                  {product.price}
              </div>
            </div>
          </div>
        )):null }
      </div>
        <CSSTransition in={sideBarVisible}
        timeout={250} classNames="sidebar" unmountOnExit>
          <SideBar></SideBar>
        </CSSTransition>
    </div>
  );
}

export default App;
