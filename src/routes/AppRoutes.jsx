import {Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import React from 'react'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
  )
}

export default AppRoutes