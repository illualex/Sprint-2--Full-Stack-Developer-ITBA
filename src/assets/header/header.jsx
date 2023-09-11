import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import '../../App.css';
import logo from '../../assets/images/logo/logo-1.png';
import About from '../../pages/about';
import Home from "../../pages/home";
import Profile from "../../pages/profile";
import Navbar from "../../components/Navbar";

export default function Header() {

    let acc = document.getElementsByClassName("accordion");
    let i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    return (
        <>
            <div className="grid grid-cols-3">
                <div className="mr-10">
                    <div id="menuToggle" className="block relative px-30 z-1 select-none">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <div className=" pl-30 max-h-0 overflow-hidden transition max-h-full delay-200 ease-out">
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="profile">Perfil</Link> </li>
                                <li><Link to="movement">Actividad</Link></li>
                                <li><Link to="price">Cotización</Link></li>
                                <li><Link to="lending">Préstamos</Link></li>
                                <li><Link to="about">Nosotros</Link></li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="mr-10">
                    <Link to="/"><img className="w-28" src={logo} alt="logo de banco BCIB" /></Link>
                </div>
                <div className="mr-10">
                    <div className="buttonMenu">
                        <Link to="signup"><button className="btnInicioSesion">Iniciar Sesion</button></Link>
                        <Link to="signup"><button className="btnRegistrarse">Hacete Cliente</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}