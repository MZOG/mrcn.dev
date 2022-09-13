import React from "react"
import Container from "../container"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <Container customClass="flex flex-col-reverse md:flex-row items-center hero">
      <div className="md:w-6/12">
        <h1 className="text-4xl leading-tight lg:text-5xl mt-5">
          Helping businesses make blazing fast JAMstack websites.
        </h1>

        <div className="flex flex-col gap-5 mt-8">
          <Link
            to="/offer/jamstack"
            className=" bg-black self-start text-gray-100 px-7 py-4 rounded-full text-xl outline-none hover:outline-black outline-2"
          >
            What is JAMstack?
          </Link>
          <Link
            to="/offer/wordpress"
            className="outline-none self-start hover:outline-black outline-2  outline-offset-2 hover:border-indigo-600 bg-gray-100 px-7 py-4 rounded-full text-lg focus-ring"
          >
            Get in touch
          </Link>
        </div>

        <div className="flex gap-4 items-center mt-10 group cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 5L12 19"></path>
            <path d="M19 12L12 19 5 12"></path>
          </svg>

          <p className="hover:underline hover:underline-offset-4">
            Learn more about me
          </p>
        </div>
      </div>
      <div className="md:w-6/12">
        <StaticImage
          src="../../images/hero-image.png"
          alt="JAMstack for Business"
          placeholder="blurred"
          quality={100}
        />
      </div>
    </Container>
  )
}

export default Hero
