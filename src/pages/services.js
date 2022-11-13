import React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import Container from "../components/container"

const Services = () => {
  return (
    <Layout>
      <Container>
        <p>Services</p>
      </Container>
    </Layout>
  )
}

export default Services

export const Head = () => <SEO title="Services" />
