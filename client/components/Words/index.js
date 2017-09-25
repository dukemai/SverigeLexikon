import React from 'react';
import { Link, Route } from 'react-router-dom';

import WordComponent from './WordComponent';
import wordsList, { getWords } from './data';

import './style.scss';

const propTypes = {

};

const defaultProps = {

};
const root = '/words';
const Words = () => (
  <div className="words-container">
    <ul className="word-list">
      {[...wordsList].map(word => (
        <li className="word" key={word}>
          <Link className="word-link" to={`${root}/${word}`}>{word} </Link>
          <span className="word-count"> ({getWords(word).length}) </span>
        </li>
      ))}
    </ul>
    <Route path={`${root}/:word`} component={WordComponent} />
  </div>
);

Words.propTypes = propTypes;
Words.defaultProps = defaultProps;

export default Words;
