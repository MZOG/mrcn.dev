import { Link } from "gatsby"
import React, { useState } from "react"
import { useEffect } from "react"

const Navigation = () => {
  const [isNavOpened, setIsNavOpened] = useState(false)
  const [windowWidth, setWindowWidth] = useState({
    width: undefined,
  })

  const handleNavOpen = () => {
    setIsNavOpened(!isNavOpened)
  }

  const navItems = [
    {
      id: 1,
      name: "Offer",
      href: "/offer",
    },
    {
      id: 2,
      name: "About",
      href: "/about",
    },
    {
      id: 3,
      name: "Blog",
      href: "/blog",
    },
    {
      id: 4,
      name: "Contact",
      href: "/contact",
    },
  ]

  useEffect(() => {
    function handleResize() {
      setWindowWidth({
        width: window.innerWidth,
      })
      console.log(windowWidth)
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <Link to="/">Marcin Zogrodnik</Link>

      <nav
        className={`${
          isNavOpened
            ? "translate-none opacity-100 left-0"
            : "translate-x-full opacity-0"
        } absolute top-14 bg-white w-full transition duration-300 md:relative md:translate-x-0 md:opacity-100 md:top-0 md:left-0`}
      >
        <ul>
          {navItems.map(item => (
            <li key={item.id} className="border-b ">
              <Link to={item.href} className="p-5 block text-sm">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button onClick={handleNavOpen}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </>
  )
}

export default Navigation
