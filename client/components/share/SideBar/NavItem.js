import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

const defaultProps = {
  link: '',
  text: '',
};

const NavItem = ({ link, text }) => (
  <li className="nav-item">
    <Link to={link}>
      {text}
    </Link>
  </li>
);

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
