import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Header from './assets/header/header';
import Home from './pages/home';
import Footer from './assets/footer/footer';
import Navbar from './components/Navbar';
import About from './pages/about';
import Profile from './pages/profile';
import Movement from './pages/movement';
import Price from './pages/price';
import Lending from './pages/lending';
import Signup from './pages/signup';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
            <Route exact path="profile" element={<Profile />} />
            <Route exact path="movement" element={<Movement />} />
            <Route exact path="price" element={<Price />} />
            <Route exact path="lending" element={<Lending />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
