import React from 'react';

import { Card, CardContent, CardTitle } from '../share';

const propTypes = {

};

const defaultProps = {

};

const Adjectives= () => (
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

Adjectives.propTypes = propTypes;
Adjectives.defaultProps = defaultProps;

export default Adjectives;
