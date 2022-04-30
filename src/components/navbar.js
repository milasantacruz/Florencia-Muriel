import React, {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Contacto from "./contacto"
import About from "./about"
import "./navbar.scss"
const Navbar = () => {
    var [contacto, setContacto] = useState(null)
    function handleContacto(){
        setContacto(true)
    }

    var [about, setAbout] = useState();
    function handleAbout(){
        setAbout(true)
    }

    const [click, setClick] = useState(false);
    const[burger, setBurger] = useState(false);

    function handleClick(){
        setClick(!click)
    }
    
    var navmenu = click? "navbar-menu is-active" : "navbar-menu"
    var navburger = click? "navbar-burger is-active" : "navbar-burger"
    return (
        <div>
        <nav className="navbar" role="navigation" aria-label="main navigation" >
            <div className="navbar-brand">

                {/* LOGO */}
                <div className="navbar-item">
                    <h1 className="florName">FlorenciaMuriel</h1>
                </div>

                {/* NAVBAR-BBURGER */}
                <a onClick={handleClick} role="button" class={navburger} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                
            </div>
            <div className={navmenu}>
                <div className="navbar-start">

                </div>

                <div className="navbar-end">
                    <a href="/" className="navbar-item"> Home </a>
                    <a 
                    onClick={handleAbout}
                    className="navbar-item"> About </a>
                    <a 
                    onClick={handleContacto}
                    className="navbar-item"> Contact </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Work
                        </a>
                        <div className="navbar-dropdown is-right">
                            <AnchorLink href="#sectionCharacter">
                                <a  className="navbar-item">Character Animation</a>
                            </AnchorLink>
                            <AnchorLink href="#sectionExplainer">
                                <a  className="navbar-item">Explainer Video</a>
                            </AnchorLink>
                            <AnchorLink href="#sectionMotion" >
                                <a className="navbar-item">Motion Graphics</a>
                            </AnchorLink>
                            <AnchorLink href="#sectionLogo" >
                                <a className="navbar-item">Logo Desing</a>
                            </AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <Contacto contacto={contacto} setContacto={setContacto}/>
        <About about={about} setAbout={setAbout} />
        </div>
    );
}

export default Navbar;
