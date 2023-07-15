import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Ecommerce from '../ecommerce/Ecommerce'

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productos" element={<Ecommerce/>}/>
    </Routes>
    </>
  )
}

export default Rutas
