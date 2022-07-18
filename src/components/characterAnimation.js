import React,{ useState, useEffect, useRef} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {StaticImage} from "gatsby-plugin-image"
import gsap from "gsap"
import "./explainerVideos.scss"
import useCharacterquery from "../hooks/character"

const CharacterAnimation = () => {
    const {characterVideos} = useCharacterquery();
    
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
        <div 
        onClick={handleClick}
        id="sectionCharacter" 
        className="category">
            <AnchorLink href="#character" >
            <div 
            className="category-title">
            <StaticImage
                src="../images/char.svg"
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
                <div id="character" className="explainerContainer">
                    {characterVideos.map(node =>{
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

export default CharacterAnimation;
