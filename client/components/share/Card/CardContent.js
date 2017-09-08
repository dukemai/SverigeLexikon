import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const CardContent = ({ children }) => (
  <div className="card-content">
    {(children)}
  </div>
);

CardContent.propTypes = propTypes;
CardContent.defaultProps = defaultProps;

export default CardContent;
