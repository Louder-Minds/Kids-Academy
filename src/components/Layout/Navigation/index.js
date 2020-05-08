import React from 'react';

import { Link } from 'gatsby';

import { NavbarToggle } from './styles';
import RedButton from '../../RedButton';
import lg from './logo-wit.png';

import './styling.scss';

const Navigation = () => (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top sticky-top">
            <a className="navbar-brand" href="#">
              <img src={lg} alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">HOME</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      CURSUSSEN
                    </a>
                    <div className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/cursussen">CURSUSSEN</Link>
                      <div class="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/rekenen">Rekenen</Link>
                      <Link className="dropdown-item" to="/taalcursus">Taal</Link>
                      <Link className="dropdown-item" to="/citotraining">CITO Traning</Link>
                      <Link className="dropdown-item" to="/englishcourse">English Course</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      OVER ONS
                    </a>
                    <div className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/over-ons">OVER ONS</Link>
                      <div class="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/over-ons#ervaringen">ERVARINGEN</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">BLOG</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      CONTACT
                    </a>
                    <div className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/contact">CONTACT</Link>
                      <div class="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/proefles">PROEFLES</Link>
                      <Link className="dropdown-item" to="/inschrijven">INSCHRIJVEN</Link>
                    </div>
                  </li>
                </ul>
            </div>
        </nav>
    );

export default Navigation;
