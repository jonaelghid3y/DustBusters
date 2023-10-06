import React from 'react';
import PropTypes from 'prop-types';
import './logo.css';
import { motion } from 'framer-motion';

export const Logo = ({ primary }) => {
  const mode = primary ? 'storybook-logo--primary' : 'storybook-logo--secondary';
  return (
    <div className='logo'>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.1 }} // delay is added
        exit={{ opacity: 0 }}
        className={['logoText1', 'storybook-logo', mode].join(' ')}>Dust</motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }} // higher delay than the first one
        exit={{ opacity: 0 }}
        className='logoText2'>Busters</motion.h2>
    </div>
  );
};

Logo.propTypes = {
  primary: PropTypes.bool,
  color: PropTypes.string,
};

Logo.defaultProps = {
  color: null,
  primary: false,
};