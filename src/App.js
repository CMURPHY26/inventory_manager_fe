import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import SideBar from './components/SideBar'



  

const App = () => {
  const [sideBarVisible, setSideBarVisible] = useState(false);

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
      {sideBarVisible === true ? 
        <SideBar setSideBarVisible={setSideBarVisible}></SideBar>
      :
      null
      }

    </div>
  );
}

export default App;
