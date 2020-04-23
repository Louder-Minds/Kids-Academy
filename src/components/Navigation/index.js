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

import { Link, useStaticQuery, graphql } from 'gatsby';

import { NavbarToggle } from './styles';
import RedButton from '../RedButton';
import Img from 'gatsby-image';
// import lg from './logo-wit.png';

import './styling.scss';

const Navigation = () => {
    const data = useStaticQuery(graphql`
        query Images {
            image: file(relativePath: { eq: "logo-wit.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    console.log(data.image.childImageSharp);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md" className="sticky-top" id="nav">
            <NavbarBrand href="/">
                <Img fluid={data.image.childImageSharp.fluid} alt="logo" />
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
                            <DropdownItem>Rekenen</DropdownItem>
                            <DropdownItem>Taal Cursus</DropdownItem>
                            <DropdownItem>CITO Training</DropdownItem>
                            <DropdownItem>English Course</DropdownItem>
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
                        <DropdownMenu>
                            <DropdownItem>Contact</DropdownItem>
                            <DropdownItem>Gratis proefles</DropdownItem>
                            <DropdownItem>Inschrijven</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <RedButton id="navbut">Plan een gratis proefles</RedButton>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;
