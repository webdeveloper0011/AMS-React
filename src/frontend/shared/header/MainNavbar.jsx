import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const MainNavbar = () => {
    const location = useLocation()
    const isAboutActive = location.pathname.startsWith('/about/')

    return (
        <>
            <div class="menu-sec ">
                <nav class="navbar navbar-expand-lg py-0 wow fadeInUp ">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse custom-nav" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink to="/" className="nav-link">HOME</NavLink>
                                </li>
                                <li class="nav-item">
                                    <span className={`nav-link ${isAboutActive ? 'active' : ''}`}>
                                        ABOUT US
                                    </span>
                                    <ul class="submenus  ">
                                        <li class="nav-item">
                                            <NavLink to="/about/about-us" className="nav-link">ABOUT US</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink to="/counter" className="nav-link">Counter</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink to="/to-dos" className="nav-link">To Dos</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink to="/demo-sub-menu-4" className="nav-link">Demo Sub Menu</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink to="/demo-sub-menu-5" className="nav-link">Demo Sub Menu</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink to="/demo-sub-menu-6" className="nav-link">Demo Sub Menu</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/platform" className="nav-link">PLATFORM</NavLink>
                                    <ul class="submenus  ">
                                        <li class="nav-item">
                                            <a href="javascript:void(0)" class="nav-link">Demo Sub Menu</a>
                                            <ul class="submenus    ">
                                                <li class="nav-item">
                                                    <a href="javascript:void(0)" class="nav-link">Demo Sub Menu</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0)" class="nav-link">Demo Sub Menu</a>
                                                    <ul class="submenus    ">
                                                        <li class="nav-item">
                                                            <a href="javascript:void(0)" class="nav-link">Demo Sub Menu</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a href="javascript:void(0)" class="nav-link">Demo Sub Menu</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0)" class="nav-link">Demo Sub Menu</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0)" class="nav-link">Demo Sub Menu</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0)" class="nav-link">Demo Sub Menu</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0)" class="nav-link">Demo Sub Menu</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0)" class="nav-link">Demo Sub Menu</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/privacy-policy" className="nav-link">Privacy Policy</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/support" className="nav-link">SUPPORT</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MainNavbar
