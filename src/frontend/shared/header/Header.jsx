import React from 'react'
import MainNavbar from './MainNavbar'

const Header = () => {
    return (
        <>
            <header>
                <div class="logo-sec-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-6 col-lg-2 logo-area">
                                <a href="login.html" class="brand-logo-sec">
                                    <img src="images/logo.svg" alt="" class="brand-logo" />
                                </a>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-8 logo-wrapper-ryt">
                                <MainNavbar/>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-2 logo-buttons-area">
                                <div class="login-btn-sec">
                                    <a href="login.html" class=" comn-btn gradient-btn"> <img src="images/user-icon.svg" alt="" /> LOG IN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
