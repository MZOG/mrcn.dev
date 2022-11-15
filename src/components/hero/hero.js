import React from "react"
import Container from "../container"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div className="section_hero">
      <Container customClass="pt-20 relative">
        {/* <Link
          to="/contact"
          className="available text-sm bg-white inline-block px-3 py-1 rounded-full border-mz/60 border text-mz hover:bg-mz hover:text-white"
        >
          Available for projects
        </Link> */}

        <label
          htmlFor="my-modal-4"
          className="available cursor-pointer text-sm bg-white inline-block px-3 py-1 rounded-full border-mz/60 border text-mz hover:bg-mz hover:text-white"
        >
          Available for projects
        </label>

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">Let's work together!</h3>
            <p className="py-2">
              I am available for new project. Leave your email and I'll contact
              you shortly.
            </p>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <button className="btn btn-sm mt-4">Button</button>
          </label>
        </label>

        <h1 className="text-7xl font-bold font-serif max-w-4xl pt-8">
          Blazing fast <span className="text-mz">JAMstack</span> websites for
          your <span className="text-mz">Business</span>
        </h1>

        <h2 className="text-2xl pt-10">
          Let's <span className="text-mz">work together</span> and make your{" "}
          <span className="text-mz">website</span> better.
        </h2>

        <Link
          to="/contact"
          className="mt-12 inline-block bg-mz px-5 py-2 text-white rounded-full hover:bg-teal-500"
        >
          Let's talk
        </Link>

        <div className="flex items-center  gap-20 mt-12">
          <StaticImage
            src="../../images/react.png"
            placeholder="blurred"
            alt="React Development"
            width={80}
            height={80}
          />
          <StaticImage
            src="../../images/js.png"
            placeholder="blurred"
            alt="JavaScript Development"
            width={80}
            height={80}
          />
          <StaticImage
            src="../../images/wp.png"
            placeholder="blurred"
            alt="WordPress Development"
            width={80}
            height={80}
          />
          <div className="flex gap-3 items-center">
            <p className="font-bold text-7xl text-mz">10+</p>
            <p className="font-medium text-lg">
              years on<span className="block"> the market</span>
            </p>
          </div>

          {/* <div className="opacity-70 hover:opacity-100 max-w-md -right-[120px] -bottom-[130px] bg-white p-5 border border-zinc-100 rounded-xl">
            <p className="text-sm">
              Working with Marcin was <span className="text-mz">excellent</span>
              ! He answered all my questions and posted each element of the
              website very quickly. He was{" "}
              <span className="text-mz">explaining</span> to me patiently, what
              website building looks like and what should I focus on as an
              entrepreneur. He{" "}
              <span className="text-mz">met my expectations</span> 100 percent,
              that’s why I <span className="text-mz">recommend</span> him
              because he is professional and you wouldn’t regret working with
              him.
            </p>

            <p className="text-sm mt-4 font-medium">
              Karolina Jabłońska - Doradca Językowy
            </p>

            <a
              href="https://doradcajezykowy.com"
              target="_blank"
              className="text-sm mt-4 hover:text-mz"
            >
              www.doradcajezykowy.com
            </a>
          </div> */}
        </div>
      </Container>
    </div>
  )
}

export default Hero
