import React from 'react';

function Footer() {
  return (
    <div className="item">
      <div className="item__content item__content--related">
        <p>Developed by:</p>
        <a className="media-item" href="https://www.facebook.com/oksanasemonenko/"
           title="Oksana" target="_blank" rel="noopener noreferrer">
          <h3 className="media-item__title">Oksana Semonenko <span>&hearts; </span></h3>
        </a>
      </div>
    </div>
  );
}

export default Footer;
