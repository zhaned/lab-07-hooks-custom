import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <div>
    <h3>{name}</h3>
    <img 
      src={image}
      alt={`${name} is missing`}
      style={{
        height: '150px'
      }}
    />
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Character;
