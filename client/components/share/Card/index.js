import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
};

const Card = ({ children, className }) => (
  <div className={`card ${className}`}>
    {(children)}
  </div>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
