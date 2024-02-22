import React,{useState,useEffect} from 'react'
import { allOrdersCount, allUsersCount, getAllorders, getAllusers } from '../services/AllAPI';
import { Table } from 'react-bootstrap';

function Admin() {

      const [allUsersData,setAllUsersData] = useState([])
      const [allorderData,setallorderData] = useState([])
      const [allusersCount,setallusersCount] = useState("")
      const [allordersCount,setallordersCount] = useState("")



      const getall = async ()=>{        
        const response = await getAllusers()
        if(response.status===200){
          setAllUsersData(response.data);
        }
        else{
          alert("Cannot fetch data!!!")
        }
    
      }

      const getallorder = async ()=>{        
        const response = await getAllorders()
        if(response.status===200){
          setallorderData(response.data);
        }
        else{
          alert("Cannot fetch data!!!")
        }
    
      }

      const alluserscount = async()=>{
        const response = await allUsersCount()
        if(response.status===200){
          setallusersCount(response.data);
        }
        else{
          alert("Cannot fetch data!!!")
        }
      }

      const allorderscount = async()=>{
        const response = await allOrdersCount()
        if(response.status===200){
          setallordersCount(response.data);
        }
        else{
          alert("Cannot fetch data!!!")
        }
      }

      useEffect(()=>{
        getall()
        getallorder()
        alluserscount()
        allorderscount()
        
      },[]);

  return (
    <>
   <nav class="navbar navbar-expand-lg bg-success" style={{position:'fixed', top:'0', zIndex:'1000', width:'100%'}}>
  <div class="container-fluid">
    <a class="navbar-brand fs-3 text-light" href="#">Go Food</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item me-5">
          
          <a href="#allorders" type="button" class="btn btn-light text-success position-relative me-5">
         AllOrders<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{allordersCount}<span class="visually-hidden">unread messages</span></span>
         </a>
        </li>
        
        <a href="#allusers" type="button" class="btn btn-light text-success position-relative me-5">
         AllUsers<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{allusersCount}<span class="visually-hidden">unread messages</span></span>
         </a>
        
      </ul>
      
    </div>
  </div>
</nav>

    <h2 className='ms-4 text-light' style={{marginTop:'100px'}}>ALL ORDERS</h2>
    <div className="container ms-5 mt-2 mb-3" id="allorders">
    <Table  striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Order Item</th>
          <th>Mobile</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Date</th>


        </tr>
      </thead>
      <tbody>
        {
          allorderData.map((item,index)=>(
            <tr>
          <td>{index+1}</td>
          <td>{item.fname}</td>
          <td>{item.name}</td>
          <td>{item.mobile}</td>
          <td>{item.quantity}</td>
          <td>{item.total}</td>
          <td>{item.date}</td>

          

        </tr>

          ))
        }
        
       
      </tbody>
    </Table>
    </div>

    <h2 className='ms-4 mt-3 text-light'>ALL USERS REGISTERED</h2>
    <div className="container ms-5 mt-2 mb-3" id="allusers">
    <Table  className="table-info" striped bordered hover >
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Date</th>
          <th>Address</th>

        </tr>
      </thead>
      <tbody>
        {
          allUsersData.map((item,index)=>(
            <tr>
          <td>{index+1}</td>
          <td>{item.fname}</td>
          <td>{item.email}</td>
          <td>{item.mobile}</td>
          <td>{item.date}</td>
          <td>{item.address}</td>

          

        </tr>

          ))
        }
        
       
      </tbody>
    </Table>
    </div>


    
    
    </>
  )
}

export default Admin