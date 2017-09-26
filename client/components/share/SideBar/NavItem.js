import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

const defaultProps = {
  link: '',
  text: '',
};

const NavItem = ({ link, text, match }) => {
  const isSelected = link.indexOf(`/${match.params.menu}`) > -1;
  return (
    <li className={`nav-item ${isSelected ? 'current' : ''}`}>
      <Link to={link}>
        {text}
      </Link>
    </li>
  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default withRouter(NavItem);
