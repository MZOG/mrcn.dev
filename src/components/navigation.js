import { Link } from "gatsby"
import React, { useState } from "react"

const Navigation = () => {
  const [isNavOpened, setIsNavOpened] = useState(false)
  const handleNavOpen = () => {
    setIsNavOpened(!isNavOpened)
  }
  return (
    <>
      <nav
        className={`${
          isNavOpened
            ? "absolute left-0 top-0 bg-white w-full pt-20 pb-14"
            : "hidden"
        }`}
      >
        <ul className="flex flex-col justify-between items-center">
          <li className="p-3 block">
            <Link className="block text-lg" to="/">
              Home
            </Link>
          </li>
          <li className="p-3 block">
            <Link className="block text-lg" to="/">
              Home
            </Link>
          </li>
          <li className="p-3 block">
            <Link className="block text-lg" to="/">
              Home
            </Link>
          </li>
          <li className="p-3 block">
            <Link className="block text-lg" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <svg
        onClick={handleNavOpen}
        className={`w-8 h-8 z-10 ${isNavOpened ? "hidden" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
      <svg
        onClick={handleNavOpen}
        className={`w-8 h-8 z-10 ${isNavOpened ? "" : "hidden"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </>
  )
}

export default Navigation
