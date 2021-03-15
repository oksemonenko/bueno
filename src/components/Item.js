import React from 'react';
import PropTypes from 'prop-types';

import { LazyImage } from './LazyImage';

function Item(props) {
  const {image, name, description, index} = props;
  return (
    <div className="item">
      <div className="item__content">
        <LazyImage src={image} alt={index}/>
        <div className="item__details">
          <ul>
            <li><span>{name}</span></li>
            <li><span>{description}</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default Item;
