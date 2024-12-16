import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/MyState";
import AllProducts from "./pages/allProducts/AllProducts";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />npm start
            
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/updateproduct" element={<UpdateProduct />} />
            {/* id wise product info dakvyche ahe  */}
            <Route path="/productInfo/:id" element={<ProductInfo />} />
            {/* if page is not found then its Nopage */}
            <Route path="/*" element={<NoPage />} />
          </Routes>
          {/* its for toastify error  */}
          <ToastContainer />
        </Router>
      </MyState>
    </div>
  );
}

export default App;
