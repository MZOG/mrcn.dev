import * as React from "react"
import Container from "./container"
import Logo from "./logo"
import Navigation from "./navigation"

const Header = () => (
  <header className="py-5">
    <Container customClass="flex justify-between items-center py-10">
      <Logo />
      <Navigation />
    </Container>
  </header>
)

export default Header
