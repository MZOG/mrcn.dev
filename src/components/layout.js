import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="mt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
