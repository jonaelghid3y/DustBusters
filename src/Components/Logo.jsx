import React from 'react'
import PropTypes from 'prop-types';
import './logo.css'

export const Logo = ({primary}) => {
    const mode = primary ? 'storybook-logo--primary' : 'storybook-logo--secondary';
    return (
    <div className='logo'>
        <h2 className={['logoText1', 'storybook-logo', mode].join(' ')}>Dust</h2>
        <h2 className='logoText2'>Busters</h2>
    </div>
    )
}


Logo.propTypes = {
    primary: PropTypes.bool,
    color: PropTypes.string,
};
  
Logo.defaultProps = {
color: null,
primary: false,
};