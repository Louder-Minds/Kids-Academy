import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

import { NavbarToggle } from "./styles"
import RedButton from "../RedButton"
import lg from "./logo-wit.png"

import "./styling.scss"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="dark" dark expand="md" className="sticky-top" id="nav">
      <NavbarBrand href="/">
        <img src={lg} />
      </NavbarBrand>
      <NavbarToggle onClick={toggle} isToggled={isOpen}>
        <div id="one" />
        <div id="two" />
      </NavbarToggle>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">HOME</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              CURSUSSEN
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>Rekenen</DropdownItem>
              <DropdownItem>Taal Cursus</DropdownItem>
              <DropdownItem>CITO Training</DropdownItem>
              <DropdownItem>English Course</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/tarieven">TARIEVEN</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              OVER ONS
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>Over ons</DropdownItem>
              <DropdownItem>Ervaringen</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/blog">BLOG</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              CONTACT
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Contact</DropdownItem>
              <DropdownItem>Gratis proefles</DropdownItem>
              <DropdownItem>Inschrijven</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <RedButton id="navbut">Neem een gratis proefles</RedButton>
      </Collapse>
    </Navbar>
  )
}

export default Navigation
