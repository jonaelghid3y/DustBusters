import React from 'react'
import PropTypes from 'prop-types';
import './ImageDivs.css'
import { motion } from 'framer-motion'


export const ImageDivs = ({ primary, src, size }) => {
    const mode = primary ? 'storybook-imageDivs--primary' : 'storybook-imageDivs--secondary';
    const sizeClass = `storybook-imageDivs--${size}`;
    return (
        <div className={`imageDiv ${mode}`}>

            <motion.img whileHover={{scale:1.1}} className={` ${sizeClass}`} src={src} alt="Icon" />

        </div>
    );
};


ImageDivs.propTypes = {
    primary: PropTypes.bool,
    src: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

ImageDivs.defaultProps = {
    primary: false,
    src: '/imgs/monster.png',
    size: 'medium',
};
