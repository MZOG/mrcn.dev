import * as React from "react"
import { Link } from "gatsby"
import Container from "./container"
import NavItem from "./navItem"

const Header = () => {
  const navigationLinks = [
    {
      id: 1,
      name: "services",
      url: "/services",
    },
    {
      id: 2,
      name: "experience",
      url: "/experience",
    },
    {
      id: 3,
      name: "about",
      url: "/about",
    },
    {
      id: 4,
      name: "blog",
      url: "/blog",
    },
    {
      id: 5,
      name: "contact",
      url: "/contact",
    },
  ]

  return (
    <header>
      <Container customClass="flex justify-between py-5">
        <Link to="/" className="text-2xl font-bold">
          code<span className="text-mz">five</span>_
        </Link>
        <nav>
          <ul className="flex gap-10">
            {navigationLinks.map(item => (
              <NavItem key={item.id} data={item} />
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
