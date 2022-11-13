import React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"

import Container from "../components/container"

const Contact = () => {
  return (
    <Layout>
      <Container>
        <p>Contact</p>
      </Container>
    </Layout>
  )
}

export default Contact

export const Head = () => <SEO title="Contact" />
