import { Link } from "gatsby"
import React, { useState } from "react"

const Navigation = () => {
  const [isNavOpened, setIsNavOpened] = useState(false)
  const handleNavOpen = () => {
    setIsNavOpened(!isNavOpened)
  }

  const navItems = [
    {
      id: 2,
      name: "Offer",
      href: "/offer",
    },
    {
      id: 3,
      name: "About",
      href: "/about",
    },
    {
      id: 4,
      name: "Blog",
      href: "/blog",
    },
    {
      id: 5,
      name: "Work with me",
      href: "/work-with-me",
      button: true,
    },
  ]

  return (
    <>
      <div class="relative">
        <nav class="hidden items-center md:flex space-x-3 text-sm">
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.href}
              activeClassName="active"
              className={`font-medium px-3 py-1 hover:bg-blue-50/50 rounded-full select-none ${
                item.button ? "hover:text-emerald-700" : "hover:text-blue-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div class="block md:hidden">
          <div class="relative">
            <button
              aria-label="Open menu"
              class="border border-gray-50 rounded-full p-2 shadow text-gray-300 h-10 w-10 bg-white hover:text-gray-600 hover:shadow-lg outline-none focus:outline-none"
              aria-expanded="false"
              aria-haspopup="dialog"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
