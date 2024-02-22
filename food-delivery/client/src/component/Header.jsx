import React from 'react'
import { Link } from 'react-router-dom'
import  logo from '../assets/image/logo.png'


function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-success" >
  <div className="container-fluid">
    <a className="navbar-brand fs-3" style={{color:'white'}} href="/">Go Food</a>
    <img  className='navbar-brand fs-3'  width={45}  src={logo} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className=" nav-link ms-3 me-3"  style={{color:'white'}} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <Link className='btn btn-light ms-3 me-3 text-success' to={'/login'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className='btn btn-light ms-3 me-3 text-success' to={'/register'}>Register</Link>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Header