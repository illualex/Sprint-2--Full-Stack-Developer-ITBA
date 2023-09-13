import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import '../App.css';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from "../pages/home";
import About from "../pages/about";
import Profile from "../pages/profile";
import Movement from "../pages/movement";
import Price from "../pages/price";
import Lending from "../pages/lending";

const Navbar = () => {
    return (
        <>
            <div id="menuToggle" className="block relative px-30 z-1 select-none">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <div className=" pl-30 overflow-hidden transition max-h-full delay-200 ease-out">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="profile">Perfil</Link> </li>
                        <li><Link to="movement">Actividad</Link></li>
                        <li><Link to="price">Cotización</Link></li>
                        <li><Link to="lending">Préstamos</Link></li>
                        <li><Link to="about">Nosotros</Link></li>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default Navbar;