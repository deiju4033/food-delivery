import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyOrders() {
 
  const [alldata,setalldata] = useState(
    JSON.parse(localStorage.getItem("token-info"))

  )
  console.log(alldata);
const navigate = useNavigate()
  const logout=()=>{
    localStorage.removeItem('token-info')
    toast.success("Logout successfully...Please login for your Order!!!")
    setTimeout(()=>{
      navigate('/')
    },2000)

  }
  return (
    <>
<nav className="navbar navbar-expand-lg bg-warning" >
  <div className="container-fluid">
    <a className="navbar-brand fs-3" style={{color:'white'}} href="/">Hai {alldata.fname}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className=" nav-link ms-3 me-3"  style={{color:'white'}} aria-current="page" to={'/dashboard'}>Home</Link>
        </li>
        
        <li className="nav-item">
          <Button onClick={logout} className='btn btn-light ms-3 me-3 text-warning' >Log out</Button>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
<div className="d-flex justify-content-center align-items-center">
<table className='table table-dark shadow table-striped table-hover mt-4' style={{width:'70%'}}>
<thead >
    <tr >
      <th className='text-success' scope="col">#</th>
      <th className='text-success' scope="col">Name</th>
      <th className='text-success' scope="col">Quantity</th>
      <th className='text-success' scope="col">Amount</th>

    </tr>
  </thead>
  <tbody className='text-light'>
   { 
    
   alldata["myorders"].map((item,index)=>(
<tr>

    <th scope="row">{index+1}</th>
    <td>{item.name}</td>
    <td>{item.quantity}</td>
   <td>{item.total}</td>
    
    </tr>
    
   ))
    
     }
    


       
       
    
  </tbody>
</table>
</div>

<ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" />

    </>
  )
}

export default MyOrders