import React from 'react';

import { Card, CardContent, CardTitle } from '../share';
import './style.scss';

const propTypes = {

};

const defaultProps = {

};

const Verbs = () => (
  <Card >
    <CardContent>
      <CardTitle>
        Verbs
      </CardTitle>
      <ul>
        <li>
          S + V(preteritum) + O.
        </li>
      </ul>
    </CardContent>
  </Card>
);

Verbs.propTypes = propTypes;
Verbs.defaultProps = defaultProps;

export default Verbs;
