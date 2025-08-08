import React,{ useState } from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import RegisterSeller from './pages/RegisterSeller'
import SellerDashboard from './pages/SellerDashboard'
import SellerGraph from './components/SellerGraph'
import AddProduct from './pages/AddProduct'
import Inventory from './pages/Inventory'
import Customer from './pages/Customer'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register-seller" element={<RegisterSeller/>}></Route>
        <Route path="/seller-dashboard" element={<SellerDashboard/>}></Route>
        <Route path="/seller-graph" element={<SellerGraph/>}></Route>
        <Route path="/add-products" element={<AddProduct/>}></Route>
        <Route path="/inventory" element={<Inventory/>}></Route>
        <Route path="/customers" element={<Customer/>}></Route>
      </Routes>
    </>
  )
}

export default App
