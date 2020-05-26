import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { colors } from '../../../util/styling_vars';
import lg from './logo-wit.png';
import Language from '../../LanguageSwitcher';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

import './styling.scss';
import { node } from 'prop-types';

const Navigation = ({ intl }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCursus(sort: { fields: contentful_id }) {
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
        }
    `);

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
                            to={`/${
                                intl.locale
                            }/${linkname.toLowerCase().replace(/\s/g, '-')}/`}
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
                                to={`/${
                                    intl.locale
                                }/${link.toLowerCase().replace(/\s/g, '-')}/`}
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
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <AniLink
                cover
                bg={`${colors.turqouise}`}
                className="navbar-brand"
                to={`/${intl.locale}/`}
            >
                <img src={lg} alt="logo" />
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

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
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
                                Al onze cursussen
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
                                to={`/${intl.locale}/over-ons#ervaringen/`}
                            >
                                <FormattedMessage id="ervaringen_nav" />
                            </AniLink>
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/over-ons#solliciteren/`}
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
    );
};

export default injectIntl(Navigation);
