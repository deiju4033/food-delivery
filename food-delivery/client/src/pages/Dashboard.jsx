import React, { useContext, useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import { Row,Button } from 'react-bootstrap'

import ImageCarosel from '../component/ImageCarosel'

import LoadingSpinner from '../component/LoadingSpinner'
import AllItems from '../component/AllItems'



function Dashboard() { 
  const [showspin,setshowspin] = useState(true)
   const navigate = useNavigate()

  useEffect(()=>{
    setTimeout(()=>{
      setshowspin(false)
      
    },2000)
  },[])
  

  const logout=()=>{
    localStorage.removeItem('token-info')
    navigate('/')

  }
    const [loginuserData,setloginuserdata] = useState(
      JSON.parse(localStorage.getItem('token-info'))
    )
    console.log(loginuserData);
 


  return (
    <>
    <nav className="navbar navbar-expand-lg bg-warning" >
  <div className="container-fluid">
    <a className="navbar-brand fs-3" style={{color:'white'}} href="/">Hai  {loginuserData.fname} </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
      <li className="nav-item">
          <Link className=" nav-link ms-3 me-3"  style={{color:'white'}} aria-current="page" to={'/dashboard'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className=" nav-link ms-3 me-3"  style={{color:'white'}} aria-current="page" to={'/myorders'} >My Orders</Link>
        </li>
        
        <li className="nav-item">
          <Button onClick={logout} className='btn btn-light ms-3 me-3 text-warning' >Log out</Button>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>

<ImageCarosel></ImageCarosel>
<Row className='ms-3 me-3 mt-5' >

{
   showspin ?(
    <LoadingSpinner/> 
    ):(
  <AllItems></AllItems>

  )}

</Row>
    </>
  )
}

export default Dashboard