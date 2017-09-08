import React from 'react';

import { Card, CardContent, CardTitle } from '../share';
import './style.scss';

const propTypes = {

};

const defaultProps = {

};

const Sentences = () => (
  <Card >
    <CardContent>
      <CardTitle>
        Satser
      </CardTitle>
      <ul>
        <li>
          Smallest unit to form a sentence.
        </li>
        <li>
          A sentence can be a clause or a combination of clauses.
        </li>
      </ul>
    </CardContent>
  </Card>
);

Sentences.propTypes = propTypes;
Sentences.defaultProps = defaultProps;

export default Sentences;
