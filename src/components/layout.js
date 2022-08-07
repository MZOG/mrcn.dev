import React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="wrapper dark:bg-gray-800">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
