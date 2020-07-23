import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import {CSSTransition} from 'react-transition-group';
import SideBar from './components/SideBar'


  

const App = () => {
  const [products, setProducts] = useState("");
  const [sideBarVisible, setSideBarVisible] = useState(false);

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
      
        <CSSTransition in={sideBarVisible}
        timeout={1000} classNames="sidebar" unmountOnExit>
          <SideBar></SideBar>
        </CSSTransition>

      <div className="product-container">
        {products ? products.map(product => (
          <div className="product" key={product._id}>
            <h1>{product.name}</h1>
            <h4>Description: {product.description}</h4>
          </div>
        )):null }
      </div>
    </div>
  );
}

export default App;
