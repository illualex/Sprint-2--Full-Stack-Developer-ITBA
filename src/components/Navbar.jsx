import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom/client";
import '../App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from "../pages/home";
import About from "../pages/about";
import Profile from "../pages/profile";
import Movement from "../pages/movement";
import Price from "../pages/price";
import Lending from "../pages/lending";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav role="navigation">
            <div id="menuToggle" className="block relative px-30 z-1 select-none">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <button className="cursor-pointer px-18  w-full border-none font-sans bg-gray-300 text-left outline-none text-lg duration-400"><a href="./index.html">Inicio</a></button>
                    <button className="cursor-pointer px-18  w-full border-none font-sans bg-gray-300 text-left outline-none text-lg duration-400">Cuenta</button>
                    <div className=" pl-30 max-h-0 overflow-hidden transition max-h-full delay-200 ease-out">
                        <li><Link to="profile">Perfil</Link></li>
                        <li><Link to="movement">Actividad</Link></li>
                        <li><Link to="price">Cotización</Link></li>
                        <li><Link to="lending">Préstamos</Link></li>
                    </div>
                    <button className="cursor-pointer px-18  w-full border-none font-sans bg-gray-300 text-left outline-none text-lg duration-400"><a href="./pages/aboutus.html">Nosotros</a></button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;