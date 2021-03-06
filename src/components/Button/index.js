import React from 'react';
import propTypes from 'prop-types';

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  className: propTypes.string,
  children: propTypes.node.isRequired
};

export default Button;