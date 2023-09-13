import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../../App.css';
import logo from '../../assets/images/logo/logo-1.png';
import About from '../../pages/about';
import Home from "../../pages/home";
import Profile from "../../pages/profile";
import Navbar from "../../components/Navbar";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const handleOcultar = () => {
        setIsVisible(false);
    };

    return (
        <>
            <div className="grid grid-cols-3 shadow-lg shadow-gray-500/5">
                <div className="m-1">
                    <Navbar></Navbar>
                </div>
                <div className="m-1">
                    <Link to="/"><img className="w-28" src={logo} alt="logo de banco BCIB" /></Link>
                </div>
                <div className="m-1">
                    <div className="buttonMenu">
                        <Link to="signup"><button className="btnInicioSesion">Iniciar <br /> Sesion</button></Link>
                        <Link to="signup"><button className="btnRegistrarse">Hacete <br /> Cliente</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}