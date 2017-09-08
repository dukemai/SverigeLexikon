import React from 'react';

import Sentences from './Sentences';
import Clauses from './Clauses';
import PresentTense from './PresentTense';
import PastTense from './PastTense';
import PresentPerfectTense from './PresentPerfectTense';
import FutureTense from './FutureTense';

import './style.scss';

const propTypes = {

};

const defaultProps = {

};

const Grammar = () => (
  <div className="grammar">
    <div className="grammar-column">
      <Sentences />
      <Clauses />
      <PresentTense />
      <PastTense />
      <PresentPerfectTense />
      <FutureTense />
    </div>
  </div>
);

Grammar.propTypes = propTypes;
Grammar.defaultProps = defaultProps;

export default Grammar;
