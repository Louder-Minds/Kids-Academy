import React from 'react';
import anime from 'animejs';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { colors } from '../../../util/styling_vars';
import Img from 'gatsby-image';
import Language from '../../LanguageSwitcher';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

import './styles.scss';

const Navigation = ({ intl }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCursus(sort: { fields: positie, order: ASC }) {
                edges {
                    node {
                        titel
                        node_locale
                        contentful_id
                    }
                    next {
                        titel
                        node_locale
                        contentful_id
                    }
                }
            }
            file(relativePath: { eq: "logo-wit.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `);

    /*
    HOME PAGE
        Register - sign up here
        register now - sign up here
        introductory meeting - contact us
        Summerschool - Summer School 2020
        Our courses dikker

    ABOUT US
        About us - Over ons

        

    */

    const courseLinks = () => {
        if (intl.locale === 'nl') {
            return data.allContentfulCursus.edges.map(({ node }, j) => {
                let coursename, linkname;
                if (node.node_locale === 'nl') {
                    coursename = node.titel;
                    linkname = node.titel;
                    return (
                        <AniLink
                            cover
                            bg={`${colors.turqouise}`}
                            className="dropdown-item"
                            key={`${coursename}`}
                            to={`/${intl.locale}/${linkname.toLowerCase().replace(/\s/g, '-')}/`}
                        >
                            {coursename}
                        </AniLink>
                    );
                }
            });
        } else {
            return data.allContentfulCursus.edges.map(({ node, next }, j) => {
                let name = 'a';
                let link = 'a';
                if (next !== null) {
                    if (node.contentful_id === next.contentful_id) {
                        name = next.titel;
                        link = node.titel;
                        return (
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                key={`${name}`}
                                to={`/${intl.locale}/${link.toLowerCase().replace(/\s/g, '-')}/`}
                            >
                                {name}
                            </AniLink>
                        );
                    } else {
                        return;
                    }
                }
            });
        }
    };

    let button = document.getElementById('dropdownbutton-mobile');
    let dropdownEl = document.getElementById('dropdown');
    let showDropDown = false;
    let dropdowns = document.getElementsByClassName('dropdown_items');

    const dropdown = (num) => {
        if (dropdowns.length > 0) {
            if (dropdowns[num - 1].style.display !== 'flex') {
                for (let i = 0; i < dropdowns.length; i++) {
                    if (i !== num - 1) {
                        dropdowns[i].style.display = 'none';
                    } else {
                        dropdowns[i].style.display = 'flex';
                    }
                }
            } else {
                dropdowns[num - 1].style.display = 'none';
            }
            console.log(num);
        }
    };

    if (button) {
        button.addEventListener('click', () => {
            showDropDown = !showDropDown;
            showDropDown
                ? anime({
                      targets: dropdownEl,
                      translateY: ['-100%', '0%'],

                      duration: 600,
                      easing: 'easeInOutExpo',
                      begin: () => dropdownEl.classList.add('active'),
                  })
                : anime({
                      targets: dropdownEl,
                      translateY: ['0%', '-100%'],
                      duration: 750,

                      easing: 'easeInOutExpo',
                      complete: () => dropdownEl.classList.remove('active'),
                  });
        });
    }

    return (
        <>
            {/* MOBILE NAV */}
            <div class="nav-container" id="mobile-nav">
                <div class="mobile-nav">
                    <div class="dropdowncontainer" id="dropdown">
                        <button class="inschrijven">Inschrijven</button>
                        <div class="nav-item">
                            <a>Home</a>
                        </div>
                        <div class="dropdown">
                            <button onClick={() => dropdown(1)} class="dropbtn">
                                Cursussen
                            </button>
                            <div class="dropdown_items">
                                <a>Al onze cursussen</a>
                                <a>Summerschool</a>
                                <a>Summerschool (international)</a>
                                <a>Rekenen</a>
                                <a>Taal</a>
                                <a>Cito</a>
                                <a>Chinese</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button onClick={() => dropdown(2)} class="dropbtn">
                                Over ons
                            </button>
                            <div class="dropdown_items">
                                <a>Over ons</a>
                                <a>Ervaringen</a>
                                <a>Solliciteren</a>
                            </div>
                        </div>
                        <div class="nav-item">
                            <a>Blog</a>
                        </div>
                        <div class="dropdown">
                            <button onClick={() => dropdown(3)} class="dropbtn">
                                Contact
                            </button>
                            <div class="dropdown_items">
                                <a>Kennismakingsgesprek</a>
                                <a>Inschrijven</a>
                            </div>
                        </div>
                    </div>
                    <div class="image">
                        <img src="https://i.imgur.com/UpGvvAV.png" />
                    </div>
                    <div class="langtoggle">
                        <span>nl</span>
                        <span>en</span>
                    </div>
                    <div class="dropdownbutton-mobile" id="dropdownbutton-mobile">
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="nav nav-desktop">
                <AniLink
                    cover
                    bg={`${colors.turqouise}`}
                    className="navbar-brand"
                    to={`/${intl.locale}/`}
                >
                    <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
                </AniLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <Language />
                        <li className="nav-item active">
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="nav-link"
                                to={`/${intl.locale}/`}
                            >
                                Home
                            </AniLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <FormattedMessage id="cursussen_nav" />
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-left"
                                aria-labelledby="navbarDropdown"
                            >
                                <AniLink
                                    cover
                                    bg={`${colors.turqouise}`}
                                    className="dropdown-item"
                                    to={`/${intl.locale}/cursussen/`}
                                >
                                    <FormattedMessage id="alle-cursussen" />
                                </AniLink>
                                {courseLinks()}
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <FormattedMessage id="over-ons_nav" />
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-left"
                                aria-labelledby="navbarDropdown"
                            >
                                <AniLink
                                    cover
                                    bg={`${colors.turqouise}`}
                                    className="dropdown-item"
                                    to={`/${intl.locale}/over-ons/`}
                                >
                                    <FormattedMessage id="over-ons_nav" />
                                </AniLink>
                                <AniLink
                                    cover
                                    bg={`${colors.turqouise}`}
                                    className="dropdown-item"
                                    to={`/${intl.locale}/over-ons#ervaringen`}
                                >
                                    <FormattedMessage id="ervaringen_nav" />
                                </AniLink>
                                <AniLink
                                    cover
                                    bg={`${colors.turqouise}`}
                                    className="dropdown-item"
                                    to={`/${intl.locale}/over-ons#solliciteren`}
                                >
                                    <FormattedMessage id="solliciteren_nav" />
                                </AniLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="nav-link"
                                to={`/${intl.locale}/scholen`}
                            >
                                Voor scholen
                            </AniLink>
                        </li>
                        <li className="nav-item">
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="nav-link"
                                to={`/${intl.locale}/blog`}
                            >
                                Blog
                            </AniLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <FormattedMessage id="contact_nav" />
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="navbarDropdown"
                            >
                                <AniLink
                                    cover
                                    bg={`${colors.turqouise}`}
                                    className="dropdown-item"
                                    to={`/${intl.locale}/contact/`}
                                >
                                    <FormattedMessage id="kennismakingsgesprek_nav" />
                                </AniLink>
                                <AniLink
                                    cover
                                    bg={`${colors.turqouise}`}
                                    className="dropdown-item"
                                    to={`/${intl.locale}/inschrijven/`}
                                >
                                    <FormattedMessage id="inschrijven_nav" />
                                </AniLink>
                            </div>
                        </li>
                        <li className="nav-item" id="navcta">
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="nav-link"
                                to={`/${intl.locale}/inschrijven/`}
                            >
                                <FormattedMessage id="inschrijven_nav" />
                            </AniLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default injectIntl(Navigation);
