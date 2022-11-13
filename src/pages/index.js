import React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import Hero from "../components/hero/hero"
import Services from "../components/services/services"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO title="Start" />
