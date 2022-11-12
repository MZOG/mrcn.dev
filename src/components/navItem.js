import * as React from "react"
import { Link } from "gatsby"

const NavItem = ({ data }) => {
  const { name, url } = data

  return (
    <li>
      <Link
        to={url}
        className="hover:text-mz"
        activeStyle={{ color: "#0147C1" }}
      >
        {name}
      </Link>
    </li>
  )
}

export default NavItem
