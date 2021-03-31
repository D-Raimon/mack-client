import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
    <NavDropdown title="Stories" id="collasible-nav-dropdown">
      <NavDropdown.Item href="#books">My Stories</NavDropdown.Item>
      <NavDropdown.Item href="#create-book">Add a Story</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Account" id="collasible-nav-dropdown">
      <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
      <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
    </NavDropdown>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#log-in">Log In</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar style={{ backgroundColor: '#ff6449e7' }} variant="dark" expand="md">
    <Navbar.Brand href="#">
      Mack
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">{user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
