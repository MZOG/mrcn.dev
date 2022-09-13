import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="md:mt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
