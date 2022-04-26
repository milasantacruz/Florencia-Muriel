import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
const Character = () => {

    const data = useStaticQuery(graphql`
    {
      allStrapiCharacterAnimations {
        nodes {
          id
          titulo
          oembed
        }
      }
    }
  `)

//var oembedObj = JSON.parse(data.allStrapiCharacterAnimations.nodes[0].oembed)
  const characterVideos = data.allStrapiCharacterAnimations.nodes.map(node =>{
      const {id, titulo, oembed} = node;
      return{
          id, 
          titulo, 
          oembed
      }
  });
  
  return{
      characterVideos
  }
       
}

export default Character;
