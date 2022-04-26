import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
const Motion = () => {

    const data = useStaticQuery(graphql`
    {
      allStrapiMotionGraphics {
        nodes {
          id
          titulo
          oembed
        }
      }
    }
  `)

//var oembedObj = JSON.parse(data.allStrapiMotionGraphics.nodes[0].oembed)
  const motionVideos = data.allStrapiMotionGraphics.nodes.map(node =>{
      const {id, titulo, oembed} = node;
      return{
          id, 
          titulo, 
          oembed
      }
  });
  
  return{
      motionVideos
  }
       
}

export default Motion;
