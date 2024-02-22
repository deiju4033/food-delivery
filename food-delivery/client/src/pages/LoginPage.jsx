import React ,{ useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';

import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { forgotPassword, loginUser } from '../services/AllApis';
import Header from '../component/Header';
import LoadingSpinner from '../component/LoadingSpinner';
import { forgotPassword, loginUser } from '../services/AllAPI';


function LoginPage() {
  const [forgotdata,setforgotdata] = useState({
    mobile:"",
    email:""
  })
  
  const [getpassword,setgetpassword] = useState("")
  const [showpassword,setpassword] = useState(false)

  const [showspin,setshowspin] = useState(true)
  const [loginData,setloginData] = useState({
    mobile:"",
    password:""
  })
  useEffect(()=>{
    setTimeout(()=>{
      setshowspin(false)
    },2000)
  },[]) 
  const getandsetLoginInputs = (e)=>{
   const {name,value} = e.target
   setloginData({...loginData,[name]:value})
  }
  console.log(loginData);

  const getandsetforgotInputs = (e)=>{
    const {name,value} = e.target
    setforgotdata({...forgotdata,[name]:value})
   }
   console.log(forgotdata);
 
  const navigate = useNavigate() 

  const handleSubmit = async(e)=>{
    e.preventDefault()
    
    const {mobile,password} = loginData
  
    if(!mobile || !password ){
      toast.warning("Please fill the form completely!!!!")
    }
    else{
      const data = new FormData()
    data.append("mobile",mobile)
    data.append("password",password)
    // make api call
  const result = await loginUser(loginData)
  

    if (result.status===200){
      setloginData({...loginData,          
        mobile:"",
        password:"",
      })
      localStorage.setItem('token-info', JSON.stringify(result.data));
      toast.success(` login successfully!!!!`)
      setTimeout(()=>{
        navigate('/dashboard')
      },5000)
    }
    else{
      toast.error("Request Failed")
    }
  
    }
  }
  const handlePassword=async(e)=>{
    e.preventDefault()
    
    const {mobile,email} = forgotdata
    

    if(!mobile || !email ){
      toast.warning("Please fill the form !!!!")
    }
    else{
      const data = new FormData()
    data.append("mobile",mobile)
    data.append("email",email)
    // make api call
  const result = await forgotPassword(forgotdata)
  

    if (result.status===200){
      setforgotdata({...forgotdata,          
        mobile:"",
        email:"",
      })
      setgetpassword(result.data);
      setpassword(true)
      
      
    }
    else{
      toast.error("Request Failed")
    }
    }
  }


  return (
    <>
       <Header></Header>
      {
        showspin ?(
          <LoadingSpinner/> 
          ):(
        <div style={{ 
        backgroundImage: `url("https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000")`, height:'100vh' 
      }}>
        <div  className='d-flex justify-content-center align-items-center' style={{paddingTop:'150px'}}>
        <div className="text-light w-50" style={{backgroundColor:'black',border:'solid',borderBlockColor:'green',borderBlockWidth:'0.5px',}}>
        <Form>
        <h3 className='mt-3 text-center'>Log in</h3>
        <div className="mb-3 ms-4 me-4 ">
          <label>Mobile Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter number" name="mobile" value={loginData.mobile} onChange={e=>getandsetLoginInputs(e)}
          />
        </div>
        <div className="mb-3 ms-4 me-4 ">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password" name="password" value={loginData.password} onChange={e=>getandsetLoginInputs(e)}
          />
        </div>
        
        <div className="d-flex justify-content-spacebetween ms-4 me-4 mb-3">
          <button onClick={e=>handleSubmit(e)} type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to={'/register'} type="submit" className="btn btn-danger ms-5">
            New User
          </Link>
        </div>
        <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="mb-3 nt-2 ms-4">Forgot Password?</a>
        
      </Form>
      </div>

        </div>
       
       
    </div> 
    )} 

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

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Forgot Password</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <Form>
        <div className="mb-3 ms-4 me-4 ">
          <label>Mobile Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter number" name='mobile' onChange={e=>getandsetforgotInputs(e)}
          />
        </div>
        <div className="mb-3 ms-4 me-4 ">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email" name='email'  onChange={e=>getandsetforgotInputs(e)}
          />
        </div>
        {
          showpassword?(
            <h4 className="text-danger">Your password is <span className="text-success"> {getpassword.password}</span> </h4>

          ):""
          }
          <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button onClick={e=>handlePassword(e)} type="button" class="btn btn-success">Submit</button>
      </div>
        </Form>
      </div>
      
    </div>
  </div>
</div>
    </>
  )
}


export default LoginPage