

import React from 'react';

const Nav = ({ scrollToSection, homeRef, aboutRef, contactRef,projectRef}) => {
  return (
    <nav className="styleNavigation">
      <header className="styleHeader">
        PORT<span className="styleHeaderSpan">FOLIO</span>
      </header>
      <div className="styleLink">
        <button onClick={() => scrollToSection(homeRef)}>HOME</button>
        <button onClick={() => scrollToSection(aboutRef)}>ABOUT</button>
        <button onClick={() => scrollToSection(projectRef)}>PROJECTS</button>
        <button onClick={() => scrollToSection(contactRef)}>CONTACT</button>

      </div>
      <div className="logoStyle">
      </div>
    </nav>
  );
}

export default Nav;

