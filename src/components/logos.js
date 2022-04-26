import React,{ useState, useEffect, useRef} from 'react';
import {StaticImage} from "gatsby-plugin-image"
import gsap from "gsap"
import "./explainerVideos.scss"
import useLogosquery from "../hooks/logos"

const Logos = () => {
    const {logosVideos} = useLogosquery();
    var [active, setActive] = useState(false);
    var actor = useRef();
    var tl = useRef();

    useEffect(()=>{
        console.log("jih")
        tl.current = gsap.timeline({});
        tl.current.to(actor.current, {
            opacity:0,
            height: 0, 
            display:"none",
            duration:1})
            
    },[])

    function handleClick(){
        console.log("click");
        setActive(!active)
    }

    useEffect(()=>{
        //console.log(active)
        tl.current.reversed(active);
    },[active])
    return (
        <div id="sectionLogo" className="category">
            <div 
            onClick={handleClick}
            className="category-title">
            <StaticImage
                src="../images/logo.svg"
                alt="titulo character animation"
                placeholder="blurred"
                layout="constrained"
                className="imgCat"
                />
            </div>
            <div ref={elem=>{actor.current = elem}}  className="containerVideos">
                <div className="explainerContainer">
                    {logosVideos.map(node =>{
                        var iFrame = JSON.parse(node.oembed).rawData.html
                        console.log()
                        return(
                            <div className="exIframe" dangerouslySetInnerHTML={{ __html: iFrame}} /> 
                        
                        )
                    })}
                </div>
            </div>
            
        </div>
    );
}

export default Logos;
