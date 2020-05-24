import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { colors } from '../../../util/styling_vars';
// import Button from '../../Button';
import lg from './logo-wit.png';
import Language from '../../LanguageSwitcher';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import './styling.scss';

const Navigation = ({ intl }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCursus {
                edges {
                    node {
                        titel
                        node_locale
                    }
                }
            }
        }
    `);
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <AniLink
                cover
                bg={`${colors.turqouise}`}
                className="navbar-brand"
                to="/"
            >
                <img src={lg} alt="logo" />
            </AniLink>
            <Language />
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

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <AniLink
                            cover
                            bg={`${colors.turqouise}`}
                            className="nav-link"
                            to="/"
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
                                to="/cursussen"
                            >
                                Al onze cursussen
                            </AniLink>
                            {data.allContentfulCursus.edges.map(
                                ({ node }, j) => {
                                    if (node.node_locale === intl.locale) {
                                        return (
                                            <AniLink
                                                cover
                                                bg={`${colors.turqouise}`}
                                                className="dropdown-item"
                                                key={`${node.titel}`}
                                                to={`/${node.titel
                                                    .toLowerCase()
                                                    .replace(/\s/g, '-')}`}
                                            >
                                                {node.titel}
                                            </AniLink>
                                        );
                                    }
                                }
                            )}
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
                                to="/over-ons"
                            >
                                <FormattedMessage id="over-ons_nav" />
                            </AniLink>
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to="/over-ons#ervaringen"
                            >
                                <FormattedMessage id="ervaringen_nav" />
                            </AniLink>
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to="/over-ons#solliciteren"
                            >
                                <FormattedMessage id="solliciteren_nav" />
                            </AniLink>
                        </div>
                    </li>
                    {/* <li className="nav-item">
                        <AniLink
                            cover
                            bg={`${colors.turqouise}`}
                            className="nav-link"
                            to="/blog"
                        >
                            Blog
                        </AniLink>
                    </li> */}
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
                                to="/contact"
                            >
                                <FormattedMessage id="kennismakingsgesprek_nav" />
                            </AniLink>
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to="/inschrijven"
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
                            to="/inschrijven"
                        >
                            <FormattedMessage id="inschrijven_nav" />
                        </AniLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default injectIntl(Navigation);
