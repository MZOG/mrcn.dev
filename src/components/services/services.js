import React from "react"
import Container from "../container"
import { StaticImage } from "gatsby-plugin-image"

const Services = () => {
  return (
    <div className="services">
      <Container customClass="mt-[120px]">
        <div className="flex items-center gap-10">
          <div className="w-6/12">
            <h2 className="font-bold text-5xl mb-8 font-serif">
              <span className="text-mz">Expert</span> in web technology
            </h2>
            <p className="text-lg">
              It’s all about your business, the challenges you have, and how I
              can help you. Whether you want to create a new digital product,
              improve an existing one, test an idea, or add a support team
              patner -{" "}
              <span className="font-semibold text-mz">I am here for you.</span>
            </p>
          </div>

          <div className="w-6/12">
            <div className="flex gap-10">
              <div className="flex items-center gap-5">
                <StaticImage
                  src="../../images/js.png"
                  placeholder="blurred"
                  alt="JavaScript Development"
                  width={50}
                  height={50}
                />
                <h3 className="font-bold text-xl">JavaScript</h3>
              </div>
              <div className="flex items-center gap-5">
                <StaticImage
                  src="../../images/react.png"
                  placeholder="blurred"
                  alt="JavaScript Development"
                  width={50}
                  height={50}
                />
                <h3 className="font-bold text-xl">React</h3>
              </div>
            </div>
            <p className="mt-5">
              JavaScript is the true heart of modern web development. No matter
              if it’s a large project or a tiny code snippet. We just use it to
              get things done.
            </p>
            <div className="flex items-center gap-5 mt-8">
              <StaticImage
                src="../../images/wp.png"
                placeholder="blurred"
                alt="JavaScript Development"
                width={50}
                height={50}
              />
              <h3 className="font-bold text-xl">WordPress</h3>
            </div>
            <p className="mt-5">
              We use WordPress as an engine to power ambitious web projects like
              apps, websites and e-commerce. We are making the impossible
              possible with WordPress.
            </p>
          </div>
        </div>

        <div className="mt-[200px]">elo</div>
      </Container>
    </div>
  )
}

export default Services
