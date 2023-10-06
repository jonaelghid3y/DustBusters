import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

export const Icon = ({ primary, src, size }) => {
  const mode = primary ? 'storybook-icon--primary' : 'storybook-icon--secondary';
  const sizeClass = `storybook-icon--${size}`;

  return (
    <div className={`iconDiv ${mode}`}>
      <img className={sizeClass} src={src} alt="Icon" />
    </div>
  );
};

Icon.propTypes = {
  primary: PropTypes.bool,
  src: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Icon.defaultProps = {
  primary: false,
  src: '/imgs/monster.png',
  size: 'medium',
};
