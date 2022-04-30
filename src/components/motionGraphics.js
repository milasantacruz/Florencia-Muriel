import React,{ useState, useEffect, useRef} from 'react';
import {StaticImage} from "gatsby-plugin-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import gsap from "gsap"
import "./explainerVideos.scss"
import useMotionquery from "../hooks/motion"

const MotionGraphics = () => {
    const {motionVideos} = useMotionquery();
    var [active, setActive] = useState(false);
    var actor = useRef();
    var tl = useRef();

    useEffect(()=>{
        tl.current = gsap.timeline({});
        tl.current.to(actor.current, {
            opacity:0,
            height: 0, 
            display:"none",
            duration:1})
            
    },[])

    function handleClick(){
        setActive(!active)
    }

    useEffect(()=>{
        //console.log(active)
        tl.current.reversed(active);
    },[active])
    return (
        <div 
        id="sectionMotion"
        onClick={handleClick}
        className="category">
            <AnchorLink href="#motion" >
            <div className="category-title">
            <StaticImage
                src="../images/motion.svg"
                alt="titulo character animation"
                placeholder="blurred"
                layout="constrained"
                className="imgCat"
                />
            </div>
            </AnchorLink>
            <div 
            ref={elem=>{actor.current = elem}}
            className="containerVideos">
                <div id="motion" className="explainerContainer">
                    {motionVideos.map(node =>{
                        var iFrame = JSON.parse(node.oembed).rawData.html
                        
                        return(
                            <div className="exIframe" dangerouslySetInnerHTML={{ __html: iFrame}} /> 
                        
                        )
                    })}
                </div>
            </div>
            
        </div>
    );
}

export default MotionGraphics;
