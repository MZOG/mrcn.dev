import React from "react"
import Container from "./container"

const Footer = () => {
  return (
    <Container customClass="mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div>
          <p className="text-lg font-bold">Marcin Zogrodnik</p>
          <p className="mt-2">JAMstack & WordPress websites.</p>
          <p className="mt-2 text-sm">mrcn.dev &copy; 2022</p>
        </div>
        <div></div>
        <div>
          <p>Get in touch</p>
        </div>
        <div>
          <p>Navigation</p>
          <ul className="mt-2">
            <li className="font-medium">Home</li>
            <li className="font-medium">Offer</li>
            <li className="font-medium">About</li>
            <li className="font-medium">Blog</li>
            <li className="font-medium">Work with me</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Footer
