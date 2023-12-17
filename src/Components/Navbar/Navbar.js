import React from 'react'
import './Navbar.css' 

const Navbar = () => {
  return (
  <div className="header">
  <div className="navbar">
    <div className="logo">
      <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/klassy-logo.png" alt />
    </div>
    <div className="menu">
      <ul><b>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Chef</li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">Features<span className="arrow">▼</span></button>
              <div className="dropdown-content">
                <a href="#">Features Page 1</a>
                <a href="#">Features Page 2</a>
                <a href="#">Features Page 3</a>
                <a href="#">Features Page 4</a>
              </div>
            </div>
          </li>
          <li>Contact Us</li>
        </b>
      </ul>
      <div className="bar"><i className="fa fa-bars" /></div>
    </div>
  </div>
</div>

 
  )
}

export default Navbar
