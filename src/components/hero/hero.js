import React from "react"
import { useState } from "react"
import Container from "../container"

const Hero = () => {
  return (
    <Container customClass="flex items-center h-[500px]">
      <div className="w-8/12">
        <h1 className="lg:text-7xl text-indigo-700">
          Expand your business{" "}
          <span className="block text-indigo-700">with JAMstack.</span>
        </h1>
        <h2 className="text-xl mt-4 text-zinc-500">
          Get up to 10x faster website with Next.js or Gatsby.
        </h2>
      </div>
    </Container>
  )
}

export default Hero
