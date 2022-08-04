import React from "react"

const Container = ({ customClass, children }) => {
  return (
    <div className={`container mx-auto px-5 ${customClass ? customClass : ""}`}>
      {children}
    </div>
  )
}

export default Container
