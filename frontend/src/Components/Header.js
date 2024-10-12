import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './finance.css'
import Modal from './Modal';


function Header() {
  return (
    <div className='Header '>
      
      <nav className="navbar navbar-expand-lg nav p-2">
  <div className="container-fluid">

    <a className="navbar-brand me-auto itemcolor" href="/" style={{ fontWeight: "bold" }}>Financing</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
    
      <ul className="navbar-nav mx-auto">
        <li className="nav-item ">
          <a className="nav-link active " aria-current="page" href="/" style={{ fontWeight:"500", color:"white"}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link itemcolor" href="/about" style={{ fontWeight: "500" }}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link itemcolor" href="/blogsubpage" style={{ fontWeight: "500" }}>Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link itemcolor" href="/services" style={{ fontWeight: "500" }}>Services</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link itemcolor" href="/contactus" tabIndex="-1" aria-disabled="true" style={{ fontWeight: "500" }}>Contact Us</a>
        </li>
      
      </ul>

      <a className="nav-link itemcolor"  tabIndex="-1" aria-disabled="true">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Sign In</button>
      </a>
    
    </div>
  </div>
</nav>

<Modal/>    

    </div>

           


  )
}

export default Header
