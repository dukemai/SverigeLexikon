import React from 'react';

import { Card, CardContent, CardTitle } from '../share';

const propTypes = {

};

const defaultProps = {

};

const Nouns= () => (
  <Card >
    <CardContent>
      <CardTitle>
        Adjectives
      </CardTitle>
      <ul>
        <li>
          S + V(preteritum) + O.
        </li>
      </ul>
    </CardContent>
  </Card>
);

Nouns.propTypes = propTypes;
Nouns.defaultProps = defaultProps;

export default Nouns;
