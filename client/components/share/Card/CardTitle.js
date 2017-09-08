import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const CardTitle = ({ children }) => (
  <h4 className="card-title">
    {(children)}
  </h4>
);

CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;

export default CardTitle;
