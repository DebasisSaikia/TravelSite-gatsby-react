import React from "react"
import Layout from "../components/layout"
import Main from "../components/Main"
import Places from "../components/Places"
import Reviews from "../components/Reviews"
import SEO from "../components/seo"
import Services from "../components/Services"
import Subscribe from "../components/Subscribe"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main/>
    <Places textHeading='Popular Destinations' />
    <Reviews/>
    <Services/>
    <Subscribe/>
  </Layout>
)

export default IndexPage
