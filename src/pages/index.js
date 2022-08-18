import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Container from "../components/container"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Container customClass="grid gap-4 grid-cols-1 lg:grid-cols-2 items-center pb-12 sm:pb-0 pt-8 ">
        <div className="space-y-5 pb-2 sm:pb-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-center lg:text-left mx-auto lg:mx-0">
            Speed up your business with blazing fast{" "}
            <span className="text-teal-500">JAMstack</span> website.
          </h1>
          <h2 className="max-w-md text-lg text-zinc-700 text-center lg:text-left mx-auto lg:mx-0 leading-snug">
            Get up to 10x faster website with Next.js or Gatsby.
          </h2>
          <div className="flex flex-col gap-6 mt-6 md:flex-row">
            <Link
              to="/"
              className="h-9 px-4 group shadow-lg shadow-blue-500/60 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-sm leading-none transition ease-in inline-flex items-center"
            >
              What is JAMstack
            </Link>
            <Link
              to="/"
              className="rounded outline-offset-4 text-sm text-zinc-700 font-semibold inline-flex items-center hover:underline group hover:text-blue-600"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div>
          {/* <div className="flex items-center gap-4 mb-4">
            <span className="bg-zinc-50 p-2 px-3 rounded-lg text-2xl shadow-lg">
              🚀
            </span>
            <h3 className="lg:text-xl font-medium text-zinc-700">
              Blazing fast
            </h3>
          </div>
          <div className="flex items-center gap-4 lg:ml-10 mb-4">
            <span className="bg-zinc-50 p-2 px-3 rounded-lg text-2xl shadow-lg">
              🎯
            </span>
            <h3 className="lg:text-xl font-medium text-zinc-700">
              SEO friendly
            </h3>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-zinc-50 p-2 px-3 rounded-lg text-2xl shadow-lg">
              🔌
            </span>
            <h3 className="lg:text-xl font-medium text-zinc-700">
              Any Headless CMS
            </h3>
          </div>
          <div className="flex items-center gap-4 lg:ml-10">
            <span className="bg-zinc-50 p-2 px-3 rounded-lg text-2xl shadow-lg">
              🔐
            </span>
            <h3 className="lg:text-xl font-medium text-zinc-700">
              More secured
            </h3>
          </div> */}
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
