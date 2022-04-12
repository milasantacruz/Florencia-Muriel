import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Home from "../components/home"
import Layout from "../components/layout"
import "./index.scss"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <Home/>
  </Layout>
)

export default IndexPage
