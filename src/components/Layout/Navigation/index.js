import React, { useState } from 'react';
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
} from 'reactstrap';

import { Link } from 'gatsby';

import { NavbarToggle } from './styles';
import RedButton from '../../RedButton';
import lg from './logo-wit.png';

import './styling.scss';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md" className="sticky-top" id="nav">
            <NavbarBrand href="/">
                <img src={lg} alt="logo" />
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
                        <DropdownMenu>
                            <DropdownItem>
                                <Link to="/cursussen">Cursussen</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/rekenen">Rekenen</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/taalcursus">Taal Cursus</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/cito">CITO Training</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/english">English Course</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <Link className="nav-link" to="/tarieven">
                            TARIEVEN
                        </Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            OVER ONS
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link to="/over-ons">Over ons</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/over-ons#ervaringen">
                                    Ervaringen
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/blog">BLOG</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            CONTACT
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link to="/contact">Contact</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/gratis-proefles">
                                    Gratis proefles
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/inschrijven">Inschrijven</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <RedButton id="navbut">Plan een gratis proefles</RedButton>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;
