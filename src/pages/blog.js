import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from "../components/container"
import BlogItem from "../components/blog/blogItem"

const posts = [
  {
    id: 1,
    title: "What / Who is mrcn.dev",
    description: "A few words about JAMstack",
    href: "/",
    image:
      "https://i.picsum.photos/id/357/536/354.jpg?hmac=pKRtI3GJUSiRWT9IwaVeDZ-Q8ZttTl1a7dLK9hRzDAY",
  },
  {
    id: 2,
    title: "WordPress vs JAMstack",
    description: "A few words about JAMstack",
    href: "/",
    image:
      "https://i.picsum.photos/id/357/536/354.jpg?hmac=pKRtI3GJUSiRWT9IwaVeDZ-Q8ZttTl1a7dLK9hRzDAY",
  },
  {
    id: 3,
    title: "JAMstack and SEO",
    description: "A few words about JAMstack",
    href: "/",
    image:
      "https://i.picsum.photos/id/357/536/354.jpg?hmac=pKRtI3GJUSiRWT9IwaVeDZ-Q8ZttTl1a7dLK9hRzDAY",
  },
  {
    id: 4,
    title: "Headless CMS - Strapi",
    description: "A few words about JAMstack",
    href: "/",
    image:
      "https://i.picsum.photos/id/357/536/354.jpg?hmac=pKRtI3GJUSiRWT9IwaVeDZ-Q8ZttTl1a7dLK9hRzDAY",
  },
  {
    id: 5,
    title: "Headless CMS - Dato CMS",
    description: "A few words about JAMstack",
    href: "/",
    image:
      "https://i.picsum.photos/id/357/536/354.jpg?hmac=pKRtI3GJUSiRWT9IwaVeDZ-Q8ZttTl1a7dLK9hRzDAY",
  },
  {
    id: 6,
    title: "JAMstack is good?",
    description: "A few words about JAMstack",
    href: "/",
    image:
      "https://i.picsum.photos/id/357/536/354.jpg?hmac=pKRtI3GJUSiRWT9IwaVeDZ-Q8ZttTl1a7dLK9hRzDAY",
  },
]

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1 className="text-4xl font-bold text-center mb-14">Blog</h1>

        <div className="max-w-3xl mx-auto">
          {posts.map(post => (
            <BlogItem item={post} />
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default Blog
