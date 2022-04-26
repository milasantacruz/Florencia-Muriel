import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
const Explainer = () => {

    const data = useStaticQuery(graphql`
    {
      allStrapiExplainerVideos {
        nodes {
          id
          titulo
          oembed
        }
      }
    }
  `)

//var oembedObj = JSON.parse(data.allStrapiExplainerVideos.nodes[0].oembed)
  const explainerVideos = data.allStrapiExplainerVideos.nodes.map(node =>{
      const {id, titulo, oembed} = node;
      return{
          id, 
          titulo, 
          oembed
      }
  });
  //console.log(explainerVideos)
  return{
      explainerVideos
  }
       
}

export default Explainer;
