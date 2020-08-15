import React from 'react';

function Navigation() {
  return (
    <nav className="menu">
      <a
        className="menu__item fa fa-facebook-official"
        href="https://www.facebook.com/oksanasemonenko/"
        target="_blank" rel="noopener noreferrer">
      </a>
      <a
        className="menu__item fa fa-instagram"
        href="https://www.instagram.com/enotogram/"
        target="_blank" rel="noopener noreferrer">
      </a>
      <a
        className="menu__item fa fa-github"
        href="https://github.com/oksemonenko/"
        target="_blank" rel="noopener noreferrer">
      </a>
      <a
        className="menu__item fa fa-linkedin"
        href="https://www.linkedin.com/in/oksemonenko/"
        target="_blank" rel="noopener noreferrer">
      </a>
    </nav>
  );
}

export default Navigation;
