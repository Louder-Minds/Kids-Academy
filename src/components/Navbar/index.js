import React from "react";

import { Nav } from "./style";

const Navbar = () => (
    <Nav>
        <ul>
            <li>
                <a>Home</a>
            </li>
            <li>
                <a>Cursussen</a>
                <div>
                    <a>Rekenen</a>
                    <a>Taalcursus</a>
                    <a>CITO Training</a>
                    <a>English Courses</a>
                </div>
            </li>
            <li>
                <a>Tarieven</a>
            </li>
            <li>
                <a>Over ons</a>
                <div>
                    <a>Over ons</a>
                    <a>Ervaringen</a>
                    <a>Blog</a>
                </div>
            </li>
            <li>
                <a>Contact</a>
                <div>
                    <a>Contact</a>
                    <a>Gratis proefles</a>
                    <a>Inschrijven</a>
                </div>
            </li>
        </ul>
    </Nav>
);

export default Navbar;
