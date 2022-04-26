import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
const Logos = () => {

    const data = useStaticQuery(graphql`
    {
      allStrapiLogos {
        nodes {
          id
          titulo
          oembed
        }
      }
    }
  `)
//var oembedObj = JSON.parse(data.allStrapiLogos.nodes[0].oembed)
  const logosVideos = data.allStrapiLogos.nodes.map(node =>{
      const {id, titulo, oembed} = node;
      return{
          id, 
          titulo, 
          oembed
      }
  });
  
  return{
      logosVideos
  }
       
}

export default Logos;
