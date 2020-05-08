import React from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
// } from 'reactstrap';

// import { Link } from 'gatsby';

// import { NavbarToggle } from './styles';
// import RedButton from '../../RedButton';
// import lg from './logo-wit.png';

import './styling.scss';

const Navigation = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    return (
        // <Navbar color="dark" dark expand="md" className="sticky-top" id="nav">
        //     <NavbarBrand href="/">
        //         <img src={lg} alt="logo" />
        //     </NavbarBrand>
        //     <NavbarToggle onClick={toggle} isToggled={isOpen}>
        //         <div id="one" />
        //         <div id="two" />
        //     </NavbarToggle>
        //     <Collapse isOpen={isOpen} navbar>
        //         <Nav className="ml-auto" navbar>
        //             <NavItem>
        //                 <NavLink href="/">HOME</NavLink>
        //             </NavItem>
        //             <UncontrolledDropdown nav inNavbar>
        //                 <DropdownToggle nav caret>
        //                     CURSUSSEN
        //                 </DropdownToggle>
        //                 <DropdownMenu>
        //                     <DropdownItem>
        //                         <Link to="/cursussen">Cursussen</Link>
        //                     </DropdownItem>
        //                     <DropdownItem>
        //                         <Link to="/rekenen">Rekenen</Link>
        //                     </DropdownItem>
        //                     <DropdownItem>
        //                         <Link to="/taalcursus">Taal Cursus</Link>
        //                     </DropdownItem>
        //                     <DropdownItem>
        //                         <Link to="/cito">CITO Training</Link>
        //                     </DropdownItem>
        //                     <DropdownItem>
        //                         <Link to="/english">English Course</Link>
        //                     </DropdownItem>
        //                 </DropdownMenu>
        //             </UncontrolledDropdown>
        //             <NavItem>
        //                 <Link className="nav-link" to="/tarieven">
        //                     TARIEVEN
        //                 </Link>
        //             </NavItem>
        //             <UncontrolledDropdown nav inNavbar>
        //                 <DropdownToggle nav caret>
        //                     OVER ONS
        //                 </DropdownToggle>
        //                 <DropdownMenu>
        //                     <DropdownItem>
        //                         <Link to="/over-ons">Over ons</Link>
        //                     </DropdownItem>
        //                     <DropdownItem>
        //                         <Link to="/over-ons#ervaringen">
        //                             Ervaringen
        //                         </Link>
        //                     </DropdownItem>
        //                 </DropdownMenu>
        //             </UncontrolledDropdown>
        //             <NavItem>
        //                 <NavLink href="/blog">BLOG</NavLink>
        //             </NavItem>
        //             <UncontrolledDropdown nav inNavbar>
        //                 <DropdownToggle nav caret>
        //                     CONTACT
        //                 </DropdownToggle>
        //                 <DropdownMenu>
        //                     <DropdownItem>
        //                         <Link to="/contact">Contact</Link>
        //                     </DropdownItem>
        //                     <DropdownItem>
        //                         <Link to="/gratis-proefles">
        //                             Gratis proefles
        //                         </Link>
        //                     </DropdownItem>
        //                     <DropdownItem>
        //                         <Link to="/inschrijven">Inschrijven</Link>
        //                     </DropdownItem>
        //                 </DropdownMenu>
        //             </UncontrolledDropdown>
        //         </Nav>
        //         <RedButton id="navbut">Plan een gratis proefles</RedButton>
        //     </Collapse>
        // </Navbar>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top sticky-top">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      CURSUSSEN
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Rekenen</a>
                      <a class="dropdown-item" href="#">Taal</a>
                      <a class="dropdown-item" href="#">CITO Traning</a>
                      <a class="dropdown-item" href="#">CITO Traning</a>
                      <a class="dropdown-item" href="#">English Course</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      OVER ONS
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">OVER ONS</a>
                      <a class="dropdown-item" href="#">ERVARINGEN</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">BLOG</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      CONTACT
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">OVER ONS</a>
                      <a class="dropdown-item" href="#">ERVARINGEN</a>
                    </div>
                  </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
