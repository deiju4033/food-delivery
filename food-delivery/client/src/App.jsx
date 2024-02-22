
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';

import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import OrderNow from './pages/OrderNow';
import Admin from './pages/Admin';
import Register from './pages/Register';
import Home from './component/Home';
import MyOrders from './pages/MyOrder';


function App() {
 

  return (
    <>
     <Routes>
    <Route path ='/' element = {<Home/>}/>
    <Route path ='/login' element = {<LoginPage/>}/>
    <Route path ='/register' element = {<Register/>}/>
    {/* <Route path ='/signup' element = {<SignUp/>}/> */}
    <Route path ='/dashboard' element = {<Dashboard/>}/>
    <Route path ='/ordernow/:id' element = {<OrderNow/>}/>
    <Route path ='/myorders' element = {<MyOrders/>}/>
    <Route path ='/admin' element = {<Admin/>}/>
    </Routes>
    
    <Footer></Footer>
      
    </>
  )
}

export default App
