import React, { useState,useEffect } from 'react'
import { Card,Button} from 'react-bootstrap'
import { Link, useParams,useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllFoods, orderfood } from '../services/AllAPI';

function OrderNow() {
    const {id} = useParams()
    const[user,setUser]= useState({})
    const [orderUsersData,setorderUsersData] = useState([])
    const [prices,setprices] = useState("")
    const [quantitys,setquantitys] = useState("")
    const [total,settotal] = useState("")

    const [orderData,setorderData] = useState({    
      name:"", 
      price:"",
      fname:"",
        mobile:"",
        quantity:""
        
      })

    const getandsetorderrInputs = (e)=>{
        const {name,value} = e.target
       setorderData({...orderData,[name]:value})   
      }
     
    console.log(orderData);

    const navigate = useNavigate()

    const getUser = async ()=>{     
        const {data}=await getAllFoods("")
        setUser(data.find(item=>item._id===id));
    }
    
    const totalprice =(e)=>{
     e.preventDefault()
       settotal(prices*quantitys)
    }
   useEffect(()=>{
        getUser()      
        setTimeout(()=>{         
        },2000);
      },[]);
     

      const handleOrder=async(e)=>{
        e.preventDefault()
        const {name,price,fname,mobile,quantity} =orderData
        if(!name || !price || !fname || !mobile || !quantity){
          toast.warning("Please fill the form completely!!!!")
        }
        else{
          const data = new FormData()
          data.append("name",user.name)
          data.append("price",user.price)
          data.append("fname",fname)
          data.append("mobile",mobile)
          data.append("quantity",quantity)

           // make api call
  const result = await orderfood(orderData)
  console.log(result);
  if (result.status===200){
    
    
    setorderUsersData(result.data);
    
    toast.success(` Ordered successfully!!!!`)
    setTimeout(()=>{
      
      navigate('/dashboard')
    },3000);
    
     }
     else{
    toast.error("Request Failed")
       }     
        }
      }

      const logout=()=>{
        localStorage.removeItem('token-info');
        navigate('/')   
      }
      
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-warning" >
  <div className="container-fluid">
    <a className="navbar-brand fs-3" style={{color:'white'}} href="/">Go Food</a>
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

  
  <div style={{height:'80vh'}} className="container">
    
        <Card className='shadow col-lg-6 mx-auto mt-5'>

        <div className="image text-center mt-3">
        <img style={{width:'250px',height:'200px',borderRadius:'50%'}} src={user.image} alt="" />
        </div>
        
        <div className=" mt-3">
        <div className="mb-2">
          <input type="" name="name"  value={user.name} onClick={e=>getandsetorderrInputs(e)} className="form-control" />
        </div>
        <div className="mb-2 "onClick={e=>setprices(e.target.value)}>
          <input type=""  name="price" value={user.price} onClick={e=>getandsetorderrInputs(e) } className="form-control text-danger" />
        </div>         
        
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Enter your name" name="fname" value={orderData.fname} onChange={e=>getandsetorderrInputs(e)} />
        </div>
        <div className="mb-3">
          <input  type="text" className="form-control" placeholder="Enter your Number" name="mobile" value={orderData.mobile} onChange={e=>getandsetorderrInputs(e)}/>
        </div>  
        <div className="mb-3" onChange={e=>setquantitys(e.target.value)}>
          <input type="number" className="form-control" placeholder="Enter your Quantity" name="quantity" value={orderData.number} onChange={e=>getandsetorderrInputs(e)}/>
        </div>  
        
         <div className="text-center mb-3" >
         <button onClick={totalprice} data-bs-toggle="modal" data-bs-target="#staticBackdrop"  className="btn btn-warning">Order</button>  
         </div>          
          </div>
      </Card>
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
theme="light" />

    {/*modal  */}
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"> 

  <div className="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Order Confirm</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <h2>Total Price is :<span className='text-danger'> {total}</span></h2>  <br />
        <span className='text-success'>Please pay cash on delivery</span>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={e=>handleOrder(e)} class="btn btn-warning">Confirm</button>
      </div>
    </div>
  </div>
</div> 

    </>
    
  )
}

export default OrderNow