import { useState } from 'react'
import Navbar from "./layouts/navbar"
import Footer from "./layouts/footer"
import Home from "./pages/home"
import Project from "./pages/project"
import ContactUs from "./pages/contactus"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/about';


function App() {
  return (
   <Router>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
        <Footer/>
      </Router>

  )
}

export default App
