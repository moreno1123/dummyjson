import { useEffect, useState } from "react";
import './App.css'
import Products from '../pages/products'
import Product from '../pages/product'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
