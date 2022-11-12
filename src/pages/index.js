import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero"
import Services from "../components/services/services"

const IndexPage = () => {
  return (
    <Layout>
      <Seo description="siema kurwo" />
      <Hero />
      <Services />
    </Layout>
  )
}

export default IndexPage
