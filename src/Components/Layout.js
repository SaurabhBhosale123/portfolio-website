import React, { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Home from './Home';
import Menus from './Menus';
import "../Styles/Layout.css"
const Layout = () => {

    const [toggle, setToggle] = useState(false);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className='Sidebar-section'>
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />

        </div>
        <div className="container">
          <Home />
        </div>
    </div>
  )
}

export default Layout
