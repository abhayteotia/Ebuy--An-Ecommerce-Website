import './App.css';
import Header from "./component/layout/Header/Header.js";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from  'react';
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Product.js"
 import Search from "./component/Product/Search.js";
import LoginSignUp from './component/User/LoginSignUp';
import  store  from './store';
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js";
import ProtectedRoute from './component/Route/ProtectedRoute';
import { Navigate } from "react-router-dom";
import UpdateProfile from "./component/User/UpdateProfile.js";
import  UpdatePassword from  "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js"
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js"
import Payment from "./component/Cart/Payment.js"
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js"
 


function App() {
const {isAuthenticated, user} = useSelector((state) =>state.user);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

     store.dispatch(loadUser())

  },[]);

  return (
     <Router>
      
        <Header />
        {isAuthenticated && <UserOptions user={user} />}
         <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:keyword" element={<Products />}></Route>

         <Route path="/search" element={<Search />}></Route> 
     
          <Route path="/account" element={<Profile />} > </Route>

          
          <Route path="/me/update" element={ <UpdateProfile/> }> 
          <Route path="/me/update" element={ <ProtectedRoute/> }/>
          </Route>  
          <Route  path="/password/update" element={<UpdatePassword/>} >
          <Route  path="/password/update" element={<ProtectedRoute/>} />
          </Route>

          <Route  path="/password/forgot" element={<ForgotPassword/>} ></Route>
            
          <Route path="/password/reset/:token" element={<ResetPassword/>} ></Route>
          
         <Route path="/login" element={<LoginSignUp />}></Route>

          <Route path="/cart" element={<Cart/>}></Route>
          {/* <Route path="/shipping" element={<Shipping/>}></Route>
          <Route path="/Order/confirm" element={<ConfirmOrder/>}></Route>
          <Route path="/process/payment" element={<Payment/>}></Route> */}
           

          <Route  path="/shipping" element={<Shipping/>} >
          <Route  path="/shipping" element={<ProtectedRoute/>} />
          </Route>
          <Route  path="/Order/confirm" element={<ConfirmOrder/>} >
          <Route  path="/Order/confirm" element={<ProtectedRoute/>} />
          </Route>
          <Route  path="/process/payment" element={<Payment/>} >
          <Route  path="/process/payment" element={<ProtectedRoute/>} />
          </Route>

          <Route  path="/orders" element={<MyOrders/>} >
          <Route  path="/orders" element={<ProtectedRoute/>} />
          </Route>

          <Route  path="/order/:id" element={<OrderDetails/>} >
          <Route  path="/order/:id" element={<ProtectedRoute/>} />
          </Route>

          <Route isAdmin={true} path="/admin/dashboard" element={<Dashboard/>} >
          <Route isAdmin={true} path="/admin/dashboard" element={<ProtectedRoute/>} />
          </Route>
 

        </Routes>
        <Footer /> 
  </Router>
  );
}

export default App;
