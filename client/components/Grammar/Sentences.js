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
        Meaningar
      </CardTitle>
      <ul>
        <li>
          Begins with a capital and ends with a full stop.
        </li>
        <li>
          Simplest format.
          <pre>
            Subjekt + Verb + Objekt
          </pre>
        </li>
      </ul>
    </CardContent>
  </Card>
);

Sentences.propTypes = propTypes;
Sentences.defaultProps = defaultProps;

export default Sentences;
