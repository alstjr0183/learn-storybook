import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Input = ({  backgroundColor = 'white', border = '1px solid black' }) => {
  return (
    <input
      style={{ backgroundColor, border }}
    />
  );
};

Input.propTypes = {
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
};

