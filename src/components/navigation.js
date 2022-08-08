import { Link } from "gatsby"
import React, { useState } from "react"

const Navigation = () => {
  const [isNavOpened, setIsNavOpened] = useState(false)
  const handleNavOpen = () => {
    setIsNavOpened(!isNavOpened)
  }

  const navItems = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Offer",
      href: "/offer",
    },
    {
      id: 3,
      name: "Works",
      href: "/works",
    },
    {
      id: 4,
      name: "Blog",
      href: "/blog",
    },
    {
      id: 5,
      name: "Get in touch",
      href: "/contact",
      button: true,
    },
  ]

  return (
    <>
      <nav
        className={`md:block ${
          isNavOpened
            ? "absolute left-0 top-0 bg-white w-full pt-20 pb-14"
            : "hidden"
        }`}
      >
        <ul className="flex flex-col justify-between items-center md:flex-row md:gap-12">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                className={`p-3 block text-lg md:text-base ${
                  item?.button
                    ? "md:bg-teal-500 md:text-white md:rounded-xl md:shadow-xl md:hover:bg-teal-600"
                    : ""
                }`}
                to={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <svg
        onClick={handleNavOpen}
        className={`md:hidden w-8 h-8 z-10 cursor-pointer ${
          isNavOpened ? "hidden" : ""
        }`}
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
        className={`md:hidden w-8 h-8 z-10 cursor-pointer ${
          isNavOpened ? "" : "hidden"
        }`}
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
