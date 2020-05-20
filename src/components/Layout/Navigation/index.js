import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
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
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <AniLink cover bg={`${colors.turqouise}`} className="navbar-brand" to="/">
        <img src={lg} alt="logo" />
      </AniLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
          <AniLink cover bg={`${colors.turqouise}`} className="nav-link" to="/">Home</AniLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cursussen
                    </a>
            <div className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdown">
            <AniLink cover bg={`${colors.turqouise}`} className="dropdown-item" to="/cursussen">Al onze cursussen</AniLink>
             { data.allContentfulCursus.edges.map(({ node }, j) => <AniLink cover bg={`${colors.turqouise}`} className="dropdown-item" key={`${node.titel}`} to={`/${node.titel.toLowerCase().replace(/\s/g, '-')}`}>{node.titel}</AniLink>)}
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Over ons
                    </a>
            <div className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdown">
             <AniLink cover bg={`${colors.turqouise}`} className="dropdown-item" to="/over-ons">Over ons</AniLink>
             <AniLink cover bg={`${colors.turqouise}`} className="dropdown-item" to="/over-ons#ervaringen">Ervaringen</AniLink>
             <AniLink cover bg={`${colors.turqouise}`} className="dropdown-item" to="/over-ons#solliciteren">Solliciteren</AniLink>
            </div>
          </li>
          <li className="nav-item">
          <AniLink cover bg={`${colors.turqouise}`} className="nav-link" to="/blog">Blog</AniLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contact
                    </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <AniLink cover bg={`${colors.turqouise}`} className="dropdown-item" to="/contact">Contact</AniLink>
            <AniLink cover bg={`${colors.turqouise}`} className="dropdown-item" to="/kennismakingsgesprek">Kennismakingsgesprek</AniLink>
            <AniLink cover bg={`${colors.turqouise}`} className="dropdown-item" to="/inschrijven">Inschrijven</AniLink>
            </div>
          </li>
          <li className="nav-item" id="navcta">
           <AniLink cover bg={`${colors.turqouise}`} className="nav-link" to="/inschrijven">Inschrijven</AniLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;
