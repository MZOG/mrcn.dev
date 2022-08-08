import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Container from "../components/container"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Container customClass="flex flex-col md:flex-row md:items-center gap-10 lg:gap-20 lg:my-20">
        <div className="lg:w-9/12">
          <span className="bg-white rounded-lg px-4 py-2 inline-block shadow-lg">
            Freelance <span className="font-medium">JAMstack</span> Developer
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mt-5">
            Speed up your business with blazing fast{" "}
            <span className="text-teal-500">JAMstack</span> website.
          </h1>
          <h2 className="mt-5 text-2xl text-zinc-700">
            Get up to 10x faster website with Next.js or Gatsby.
          </h2>
          <div className="flex flex-col gap-6 mt-6">
            <Link
              to="/"
              className="text-teal-500 self-start hover:bg-teal-500 hover:text-white px-5 py-3 inline-block font-medium rounded-xl border border-teal-500 shadow-lg"
            >
              What is JAMstack
            </Link>
            <Link
              to="/"
              className="bg-teal-500 self-start hover:bg-teal-600 text-white px-5 py-3 inline-block font-medium rounded-xl shadow-lg"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className="lg:w-3/12">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-zinc-50 p-2 px-3 rounded-lg text-2xl shadow-lg">
              🚀
            </span>
            <h3 className="text-xl font-medium text-zinc-700">Blazing fast</h3>
          </div>
          <div className="flex items-center gap-4 ml-10 mb-4">
            <span className="bg-zinc-50 p-2 px-3 rounded-lg text-2xl shadow-lg">
              🎯
            </span>
            <h3 className="text-xl font-medium text-zinc-700">SEO friendly</h3>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-zinc-50 p-2 px-3 rounded-lg text-2xl shadow-lg">
              🔌
            </span>
            <h3 className="text-xl font-medium text-zinc-700">
              Any Headless CMS
            </h3>
          </div>
          <div className="flex items-center gap-4 ml-10">
            <span className="bg-zinc-50 p-2 px-3 rounded-lg text-2xl shadow-lg">
              🔐
            </span>
            <h3 className="text-xl font-medium text-zinc-700">More secured</h3>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
