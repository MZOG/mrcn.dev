import React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="wrapper overflow-x-hidden">
      <div class="w-screen h-screen absolute z-index-0 shape-container">
        <div class="absolute rounded-full h-60 w-60 shadow-2xl shadow-blue-600 bg-blue-200 animate-clockwise left-[5%] top-[14%]"></div>
        <div class="absolute rounded-full h-24 w-24 shadow-2xl shadow-indigo-600 bg-indigo-200 animate-reverse-clockwise right-[25%] bottom-[25%]"></div>
        <div class="absolute rounded-full h-32 w-32 shadow-2xl shadow-pink-600 bg-pink-200 animate-clockwise left-[90%] "></div>
        <div class="absolute rounded-full h-20 w-20 shadow-2xl shadow-red-600 bg-red-200 animate-reverse-clockwise left-[25%] top-[35%]"></div>
        <div class="absolute rounded-full h-64 w-64 shadow-2xl shadow-sky-600 bg-sky-200 animate-reverse-clockwise left-1/2 top-[27%]"></div>
      </div>
      <div className="backdrop-blur-xl w-screen h-screen">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
