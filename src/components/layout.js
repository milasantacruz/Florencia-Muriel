/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React,{ useState, useEffect, useRef}  from "react"
import PropTypes from "prop-types"
import LoaderContainer from "./loaderContainer"
import gsap from "gsap"
import "./layout.css"
import Navbar from "./navbar"
import Redes from "./redes"


const Layout = ({ children }) => {

var [active, setActive] = useState(true);
var actor = useRef();
var tl = useRef();
useEffect(() => {
  console.log("jih")
  tl.current = gsap.timeline({});
  tl.current.to(actor.current,{
    opacity:0,
    height: 0, 
    display:"none",
    duration:1})
  
},[]);

function handleClick(){
  setActive(false);
  console.log("click")
}

var loaderClass = active? "loaderVisible" : "loaderHidden"
useEffect(()=>{
  tl.current.reversed(active);
},[active])



  return (
    <div 
    className={loaderClass}
    >
    <div 
      ref={elem => {actor.current = elem}}
      onClick={handleClick}
      >
        <LoaderContainer />
      </div>
      
      <Navbar  />
      <Redes/>
      <main>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
