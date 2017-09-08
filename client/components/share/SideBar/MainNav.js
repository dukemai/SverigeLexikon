import React from 'react';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';

const propTypes = {

};

const defaultProps = {

};

const MainNav = () => (
  <ul className="main-nav">
    <NavItem link="/grammar" text="Grammar" />
    <NavItem link="/adjectives" text="Adjectives" />
    <NavItem link="/adverbs" text="Adverbs" />
    <NavItem link="/verbs" text="Verbs" />
    <NavItem link="/nouns" text="Nouns" />
  </ul>
);

MainNav.propTypes = propTypes;
MainNav.defaultProps = defaultProps;

export default MainNav;
