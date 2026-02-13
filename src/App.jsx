import { useState } from 'react'
import Navbar from "./layouts/navbar"
import Footer from "./layouts/footer"
import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
   <Router>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
        <Footer/>
      </Router>

  )
}

export default App
