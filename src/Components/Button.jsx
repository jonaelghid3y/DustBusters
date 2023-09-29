import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components';


export const Button = ({ label, ...rest }) => {
  return (
    <StyledButton
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.9 }}  
      initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }} 
      {...rest}
    >
      {label}
    </StyledButton>
  );
};

const getVariantStyles = ({ primary = false }) =>
  primary
    ? css`
        color: black;
        background-color: #FFD530;
        border: 2px solid transparent;
      `
    : css`
        color: #333;
        background-color: white;
        border: 2px solid #FFD530;
      `;


const getSizeStyles = ({ size = 'large' }) => {
  switch (size) {
    case 'small': {
      return css`
        font-size: 16px;
        padding: 10px 16px;
        border-radius: 12px;
      `;
    }
    default: {
      return css`
        font-size: 24px;
        padding: 16px 30px;
        border-radius: 20px;
      `;
    }
  }
};

const StyledButton = styled(motion.button)`
  font-family: 'Poppins';
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`
  

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
