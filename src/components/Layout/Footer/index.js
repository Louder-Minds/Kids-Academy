import React from 'react';

import { Container } from './style';

import kennemer from './Kennemer-Lyceum.png';
import kidsproof from './kidsproof1.png';

const Footer = () => (
    <Container>
        <div id="content">
            <div>
                <a href="/">Home</a>
                <a href="/cursussen">Cursussen</a>
                <a href="/tarieven">Tarieven</a>
                <a href="/over-ons">Over ons</a>
                <a href="/">Ervaringen</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <a href="/algemene-voorwaarden">Algemene voorwaarden</a>
            </div>

            <div>
                <span>Kids Academy Amsterdam</span>
                <span>Nicolaas Klooster</span>
                <span>Prinses Irenestraat 19</span>
                <span>1077 WT Amsterdam</span>
            </div>

            <div>
                <span>Kids Academy Laren</span>
                <span>Brink 33</span>
                <span>1251 KT Laren</span>
            </div>

            <div>
                <span>Kids Academy Haarlem</span>
                <span>Kennemer Lyceum</span>
                <span>Adriaan Stoopplein 7</span>
                <span>2051 KA Overveen</span>
            </div>

            <div>
                <span>Kids Academy Rotterdam</span>
                <span>Opening soon</span>
            </div>

            <div>
                <span>Hoofdkantoor: 020 717 30 60</span>
            </div>

            <div>
                <img src={kennemer} alt="afbeelding kennemer logo" />
                <img src={kidsproof} alt="afbeelding kidsproof logo" />
            </div>
            {/* <div>
            </div> */}
        </div>

        <div id="copy1">
            <span>Developed by: <a href="https://rubennijhuis.com" target="_">Ruben Nijhuis</a></span>
        </div>
        <div id="copy">
            <span>©Copyright 2020 | Kids Academy | All rights reserved</span>
        </div>
    </Container>
);

export default Footer;
