import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
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
            file(relativePath: { eq: "logo-wit-4.png" }) {
                childImageSharp {
                    fluid(maxWidth: 900) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
                        <Link
                            // cover
                            // bg={`${colors.turqouise}`}
                            className="dropdown-item"
                            key={`${coursename}`}
                            to={`/${intl.locale}/${linkname.toLowerCase().replace(/\s/g, '-')}/`}
                        >
                            {coursename}
                        </Link>
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
                            <Link
                                // cover
                                // bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                key={`${name}`}
                                to={`/${intl.locale}/${link.toLowerCase().replace(/\s/g, '-')}/`}
                            >
                                {name}
                            </Link>
                        );
                    } else {
                        return;
                    }
                }
            });
        }
    };
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="nav">
            <Link className="navbar-brand" to={`/${intl.locale}/`}>
                <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
            </Link>
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
                        <Link
                            cover
                            bg={`${colors.turqouise}`}
                            className="nav-link"
                            to={`/${intl.locale}/`}
                        >
                            Home
                        </Link>
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
                            <Link
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/cursussen/`}
                            >
                                <FormattedMessage id="alle-cursussen" />
                            </Link>
                            {courseLinks()}
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link
                            cover
                            bg={`${colors.turqouise}`}
                            className="nav-link"
                            to={`/${intl.locale}/events/`}
                        >
                            Events
                        </Link>
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
                            <Link
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/over-ons/`}
                            >
                                <FormattedMessage id="over-ons_nav" />
                            </Link>
                            <Link
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/over-ons#ervaringen`}
                            >
                                <FormattedMessage id="ervaringen_nav" />
                            </Link>
                            <Link
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/over-ons#solliciteren`}
                            >
                                <FormattedMessage id="solliciteren_nav" />
                            </Link>
                        </div>
                    </li>
                    {/* <li className="nav-item">
                        <Link
                            cover
                            bg={`${colors.turqouise}`}
                            className="nav-link"
                            to={`/${intl.locale}/scholen`}
                        >
                            Voor scholen
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link
                            cover
                            bg={`${colors.turqouise}`}
                            className="nav-link"
                            to={`/${intl.locale}/blog`}
                        >
                            Blog
                        </Link>
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
                            <Link
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/contact/`}
                            >
                                <FormattedMessage id="kennismakingsgesprek_nav" />
                            </Link>
                            <Link
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/inschrijven/`}
                            >
                                <FormattedMessage id="inschrijven_nav" />
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item" id="navcta">
                        <Link
                            cover
                            bg={`${colors.turqouise}`}
                            className="nav-link"
                            to={`/${intl.locale}/inschrijven/`}
                        >
                            <FormattedMessage id="inschrijven_nav" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default injectIntl(Navigation);
