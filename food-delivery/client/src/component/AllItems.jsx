import React, { useEffect, useState } from 'react'
import {Button} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { getAllFoods } from '../services/AllAPI';

function AllItems() {

  const [allfoods,setallfoods] = useState([])
  const [search,setSearch] = useState("")




  const getallfoods = async ()=>{
    const response = await getAllFoods(search)
    setallfoods(response.data);
  }
  

  useEffect(()=>{
    getallfoods()
   },[search])

  return (
    <>
     <div class=" d-flex justify-content-between align-items-center ">
         <input onChange={e=>setSearch(e.target.value)} type="text" class="form-control" placeholder="Search by category" />   
         <i class="fa-solid fa-rectangle-xmark text-light fs-3 ms-2"></i>   
      </div>
     {   
      allfoods.map(food=>(
       
    <div class="card m-3" style={{width:'18rem', backgroundColor:'black',border:'solid',borderBlockColor:'white',borderBlockWidth:'0.5px'}}>
  <img style={{height:'250px'}} src={food.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 class="card-title text-light">{food.name}</h4>
    <h5 className='text-light'>₹{food.price}/-</h5>
        <hr/>       
        <Link to={`/ordernow/${food._id}`} className='btn btn-success'>Order Now</Link>
  </div>
</div>
   
     ))   
    }   
    </>
  )
}

export default AllItems