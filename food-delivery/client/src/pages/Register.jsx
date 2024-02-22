import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../component/LoadingSpinner'


import Header from '../component/Header';
import { registerUser } from '../services/AllAPI';


function Register() {
  const [showspin, setshowspin] = useState(true)
  const [registerData, setregisterData] = useState({
    fname: "",
    mobile: "",
    email: "",
    address: "",
    password: ""

  })

  useEffect(() => {
    setTimeout(() => {
      setshowspin(false)
    }, 2000)
  }, [])

  const getandsetUserInputs = (e) => {
    const { name, value } = e.target
    setregisterData({ ...registerData, [name]: value })

  }
  console.log(registerData);
  const navigate = useNavigate()
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit');
    const { fname, mobile, email, address, password } = registerData
    if (!fname || !mobile || !email || !address || !password) {
      toast.warning("Please fill the form completely!!!!")
    }
    else {
      const data = new FormData()
      data.append("fname", fname)
      data.append("mobile", mobile)
      data.append("email", email)
      data.append("address", address)
      data.append("password", password)
 
 
      // make api call
      const result = await registerUser(registerData)
      console.log(result);
      if (result.status === 200) {
        setregisterData({
          ...registerData,
          fname: "",
          mobile: "",
          email: "",
          address: "",
          password: "",
        })
        toast.success(` Registered successfully!!!!`)
        setTimeout(() => {
          navigate('/login')
        }, 5000)
      }
      else {
        toast.error("User Already exist...Please login!!!!")
      }

    }
  }


  return (
    <>
      <Header />

      {
        showspin ? (
          <LoadingSpinner />
        ) : (
          <div style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1708635201~exp=1708638801~hmac=9de718c0fcab9a8b306573abbb051931ca459bc893f11d66f291fdb809a4c64f&w=1060")`, height: '100vh'
          }}>
            <div className='d-flex justify-content-center align-items-center' style={{ paddingTop: '75px', width: '100%' }}>
              <div className="text-light w-50" style={{ backgroundColor: 'black', border: 'solid', borderBlockColor: 'green', borderBlockWidth: '0.5px', }}>
                <Form>
                  <h3 className='mt-3 text-center'>Sign Up</h3>

                  <div className="mb-3 ms-4 me-4 ">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name" name="fname" value={registerData.fname} onChange={e => getandsetUserInputs(e)}
                    />
                  </div>

                  <div className="mb-3 ms-4 me-4 ">
                    <label>Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter number" name="mobile" value={registerData.mobile} onChange={e => getandsetUserInputs(e)}
                    />
                  </div>
                  <div className="mb-3 ms-4 me-4 ">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter email"
                      name="email" value={registerData.email} onChange={e => getandsetUserInputs(e)}
                    />
                  </div>

                  <div className="mb-3 ms-4 me-4 ">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter correct location"
                      name="address" value={registerData.address} onChange={e => getandsetUserInputs(e)}
                    />
                  </div>
                  <div className="mb-3 ms-4 me-4 ">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password" name="password" value={registerData.password} onChange={e => getandsetUserInputs(e)}
                    />
                  </div>

                  <div className="d-flex justify-content-spacebetween ms-4 me-4 mb-3">
                    <button onClick={e => handleSubmit(e)} type="submit" className="btn btn-success">
                      Submit
                    </button>
                    <Link to={'/login'} type="submit" className="btn btn-danger ms-5">
                      Already User
                    </Link>
                  </div>

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
    </>
  )
}


export default Register

