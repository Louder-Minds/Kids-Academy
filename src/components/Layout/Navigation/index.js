import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { colors } from '../../../util/styling_vars'
// import Button from '../../Button';
import lg from './logo-wit.png';

import './styling.scss';

const Navigation = () => {
  const data = useStaticQuery(graphql`
  query {
      allContentfulCursus {
          edges {
              node {
                  titel
              }
          }
      }
     }
`);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top sticky-top">
      <Link className="navbar-brand" to="/">
        <img src={lg} alt="logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">HOME</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              CURSUSSEN
                    </a>
            <div className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdown">
             { data.allContentfulCursus.edges.map(({ node }, j) => <AniLink paintDrip hex={`${colors.turqouise}`} className="dropdown-item" key={`${node.titel}`} to={`/${node.titel.toLowerCase()}`}>{node.titel}</AniLink>)}
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              OVER ONS
                    </a>
            <div className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdown">
              <AniLink paintDrip hex={`${colors.turqouise}`} className="dropdown-item" to="/over-ons">Over ons</AniLink>
              <Link className="dropdown-item" to="/over-ons#ervaringen">Ervaringen</Link>
              <Link className="dropdown-item" to="/over-ons#solliciteren">Solliciteren</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">BLOG</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              CONTACT
                    </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/contact">Contact</Link>
              <Link className="dropdown-item" to="/proefles">Kennismakingsgesprek</Link>
            </div>
          </li>
          <li className="nav-item" id="navcta">
            <Link className="nav-link" to="/inschrijven">INSCHRIJVEN</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;
