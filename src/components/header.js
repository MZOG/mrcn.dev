import * as React from "react"
import Container from "./container"
import Logo from "./logo"
import Navigation from "./navigation"

const Header = () => (
  // <header className="fixed top-0 w-full border-b transition-colors backdrop-blur bg-white/70 supports-backdrop-blur:bg-white/60">
  <header>
    <Container customClass="flex justify-between items-center py-4">
      <Logo />
      <Navigation />
    </Container>
  </header>
)

export default Header
