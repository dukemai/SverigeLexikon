import React from 'react';

import MainNav from './MainNav';
import './style.scss';

const propTypes = {

};

const defaultProps = {

};

const SideBar = () => (
  <div className="app__side-bar side-bar">
    <div className="brand">
      Svenska Lexikon
    </div>
    <MainNav />
  </div>
);

SideBar.propTypes = propTypes;
SideBar.defaultProps = defaultProps;

export default SideBar;
