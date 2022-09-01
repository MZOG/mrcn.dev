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
  ]

  return (
    <>
      <div>
        <nav class="items-center md:flex text-sm">
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.href}
              activeClassName="active"
              className={`font-medium hover:underline underline-offset-2 ml-10`}
            >
              {item.name}
            </Link>
          ))}
          <label
            for="my-modal-5"
            class="font-bold hover:underline underline-offset-2 ml-10 cursor-pointer"
          >
            Work with me
          </label>
          <input type="checkbox" id="my-modal-5" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative w-11/12 max-w-3xl">
              <label
                for="my-modal-5"
                class="btn btn-sm btn-circle absolute right-3 top-3"
              >
                ✕
              </label>

              <h2 class="font-bold text-3xl mb-8 text-center">
                Get in touch 👋🏼
              </h2>

              <div className="flex justify-between">
                <div className="w-6/12">
                  <p>E-mail:</p>
                  <p className="">hi@mrcn.dev</p>
                </div>
                <div className="w-6/12 flex flex-col">
                  <div>
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
              </div>
              <div class="divider"></div>
              <p>lel</p>
              {/* <div class="modal-action">
                <label for="my-modal-5" class="btn">
                  Yay!
                </label>
              </div> */}
            </div>
          </div>
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
