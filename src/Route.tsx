import React from 'react'
import { BrowserRouter, Routes, Route as Routing} from 'react-router-dom'
import Home from './Home'

function Route() {
  return (
    <BrowserRouter>
    <Routes>
      <Routing path="/" element={<Home />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Route