import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Card = ({ children }) => (
  <div className="card">
    {(children)}
  </div>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
