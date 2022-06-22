import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import "./home.scss"
const Home = () => {


const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativePath: {eq: "AnimationReel2021.mp4"}}) {
        nodes {
          id
          publicURL
          name
        }
      }
    }
  `)

  console.log(data.allFile.nodes[0].publicURL)
    return (
       <div className="reelContainer">
       <video
            className="videoReel"
            height="100%"
            width="100%"
            loop
            controls
            >
              <source
                src={data.allFile.nodes[0].publicURL}
                type="video/mp4"
              />
          </video>
            {/* <div id="reelContainer" dangerouslySetInnerHTML={{ __html: responseIframe }} /> */}
          </div> 
          
           
        


    );
}

export default Home;
