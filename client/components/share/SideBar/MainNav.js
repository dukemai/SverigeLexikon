import React from 'react';

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
    <NavItem link="/words" text="Words" />
  </ul>
);

MainNav.propTypes = propTypes;
MainNav.defaultProps = defaultProps;

export default MainNav;
