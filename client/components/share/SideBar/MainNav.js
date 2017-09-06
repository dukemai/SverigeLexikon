import React from 'react';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';

const propTypes = {

};

const defaultProps = {

};

const MainNav = () => (
  <ul className="main-nav">
    <NavItem to="/grammar" text="Grammar" />
    <NavItem to="/adjectives" text="Adjectives" />
    <NavItem to="/adverbs" text="Adverbs" />
    <NavItem to="/verbs" text="Verbs" />
    <NavItem to="/nouns" text="Nouns" />
  </ul>
);

MainNav.propTypes = propTypes;
MainNav.defaultProps = defaultProps;

export default MainNav;
