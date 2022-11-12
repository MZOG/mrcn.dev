import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
      mobile: true,
    },
    {
      id: 2,
      name: "Offer",
      href: "/offer",
      mobile: false,
    },
    {
      id: 3,
      name: "Work",
      href: "/work",
      mobile: false,
    },
    {
      id: 4,
      name: "About",
      href: "/about",
      mobile: false,
    },
    {
      id: 5,
      name: "Articles",
      href: "/blog",
      mobile: false,
    },
    {
      id: 6,
      name: "Contact",
      href: "/contact",
      mobile: false,
    },
  ]

  return (
    <>
      <Link to="/" className="font-bold flex items-center gap-5">
        <StaticImage
          src="../images/mzlogo.jpg"
          alt="JAMstack for Business"
          placeholder="blurred"
          quality={100}
          className="w-10 md:w-16"
        />
        Marcin Zogrodnik
      </Link>

      <nav
        className={`${
          isNavOpened ? "translate-none" : " -translate-y-full"
        } flex justify-center items-center bg-black h-full fixed left-0 top-0 w-full transition-all`}
      >
        <ul className="flex flex-col lg:gap-20 py-10">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.href}
                className="md:first-child:hidden font-extrabold py-4 lg:py-12 inline-block text-white text-2xl lg:text-3xl"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <svg
          onClick={handleNavOpen}
          className="w-8 h-8 ml-20 absolute right-7 top-7 text-white cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </nav>

      <svg
        onClick={handleNavOpen}
        className="w-8 h-8 md:w-11 md:h-11 cursor-pointer hover:stroke-zinc-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </>
  )
}

export default Navigation
