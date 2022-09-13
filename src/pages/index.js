import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"
import Hero from "../components/hero/hero"

const IndexPage = () => {
  return (
    <Layout>
      <Seo description="siema kurwo" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
