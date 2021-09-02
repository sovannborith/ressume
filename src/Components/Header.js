import React from "react";
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      
      <nav class="nav bd-grid">
        <div>
        <a href="#home" class="nav__logo">
            <img
              src="../../images/logo_transparent.png"
              alt="Fivewave"
              width="70"
              height="70"
            />
          </a>
        </div>
        
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
              <li class="nav__item">
                <a href="#home" class="nav__link active">Home</a>
              </li>
              <li class="nav__item">
                <a href="#about" class="nav__link">About</a>
              </li>
              <li class="nav__item">
                <a href="#resume" class="nav__link">Resume</a>
              </li>
              <li class="nav__item">
                <a href="#portfolio" class="nav__link">Portfolio</a>
              </li>
              <li class="nav__item">
                <a href="#contact" class="nav__link">Contact</a>
              </li>
            </ul>
        </div>
        
        <div class="nav__toggle" id="nav-toggle">
          <div></div>
        </div>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
          </h1>
          <h3>
            Based in {city}. <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="nav__link" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
