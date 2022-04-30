import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Home from "../components/home"
import ExplainerVideos from "../components/explainerVideos"
import CharacterAnimation from "../components/characterAnimation"
import MotionGraphics from "../components/motionGraphics"
import Logos from "../components/logos"
import Section1 from "../components/section1"
import Layout from "../components/layout"
import "./index.scss"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <Section1>
      <Home/>
    </Section1>
    <ExplainerVideos />
    <CharacterAnimation/>
    <MotionGraphics/>
    <Logos/>
  </Layout>
)

export default IndexPage
