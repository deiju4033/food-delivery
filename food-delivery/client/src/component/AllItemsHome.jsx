import React ,{useState,useEffect} from 'react'
import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllFoods } from '../services/AllAPI';

function AllitemsinHome() {

  const [allfoods,setallfoods] = useState([])
  const [search,setSearch] = useState("")

  
  const getallfoods = async ()=>{
    const response = await getAllFoods(search)
    setallfoods(response.data);
  }
  const showMsg = ()=>{
   toast.warning("Please Register for ordering food....If you are already account Please login!!!")
  }
  

  useEffect(()=>{
    getallfoods()
   },[search])
  return (
    <>
    {   
      allfoods.map(food=>(
        <div class="card m-3" style={{width:'18rem', backgroundColor:'black',border:'solid',borderBlockColor:'white',borderBlockWidth:'0.5px'}}>
        <img style={{height:'250px'}} src={food.image} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h4 class="card-title text-light">{food.name}</h4>
          <h5 className='text-light'>₹{food.price}/-</h5>
              <hr/>       
              <Button onClick={showMsg}  className='btn btn-success'>Order Now</Button>
        </div>
      </div>
    ))   
  }  

<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />

    </>
  )
}

export default AllitemsinHome