import * as React from "react"
import Container from "./container"
import Logo from "./logo"
import Navigation from "./navigation"

const Header = () => (
  <header>
    <Container customClass="flex justify-between items-center py-4 relative z-30">
      <Navigation />
    </Container>
  </header>
)

export default Header
