import React, {useState, useEffect, useCallback} from 'react';
import { useStaticQuery, graphql } from "gatsby"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
const About = ({about, setAbout}) => {
    const data = useStaticQuery(graphql`
    {
      strapiAboutImage {
        id
        titulo
        contenido
        Florencia {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)

  
  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      console.log("esc")
      setAbout(false)
    }
  }, [about]);

  useEffect(()=>{
      
      document.addEventListener("keydown", escFunction, false);

      return()=>{
       
        document.removeEventListener("keydown", escFunction, false);
      }
  },[])
  
  var dato = data.strapiAboutImage;
  var img = getImage(data.strapiAboutImage.Florencia[0].localFile);

    function handleClose(){
        setAbout(false)
    }
    var classAbout = about? "modal is-active modal-about": "modal modal-about"
    return (
        <div className={classAbout} >
            <div className="modal-background"></div>
            <div className="modal-content card_about">
                <div className="card">
                    <div className="card-image">
                            <GatsbyImage
                             image={img}  
                             alt={"Florencia Muriel"} 
                            />
                    </div>
                    <div className="card-content hi_there">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{dato.titulo}</p>
                                <p className="subtitle is-6">{dato.contenido}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button 
                onClick={handleClose}
                className="button modal-close" aria-lebel="close"></button>
            </div>
            
        </div>
    );
}

export default About;
