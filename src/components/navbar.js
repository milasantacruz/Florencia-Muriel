import React from 'react';
import "./navbar.scss"
const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" >
            <div className="navbar-brand">

                {/* LOGO */}
                <div className="navbar-item">
                    <h1 className="florName">FlorenciMuriel</h1>
                </div>

                {/* NAVBAR-BBURGER */}
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">

                </div>

                <div className="navbar-end">
                    <a href="/" className="navbar-item"> Home </a>
                    <a href="/" className="navbar-item"> About </a>
                    <a href="/" className="navbar-item"> Contact </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Work
                        </a>
                        <div className="navbar-dropdown is-right">
                            <a href="" className="navbar-item">Character Animation</a>
                            <a href="" className="navbar-item">Explainer Video</a>
                            <a href="" className="navbar-item">Motion Graphics</a>
                            <a href="" className="navbar-item">Logo Desing</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
