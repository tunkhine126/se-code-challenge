import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NaviBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar-nav">
        <Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/" className="latest">Latest</Nav.Link>
          <Nav.Link href="/search" className="search">Search</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NaviBar;