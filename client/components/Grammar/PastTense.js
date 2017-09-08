import React from 'react';

import { Card, CardContent, CardTitle } from '../share';
import './style.scss';

const propTypes = {

};

const defaultProps = {

};

const PastTense = () => (
  <Card >
    <CardContent>
      <CardTitle>
        Preteritum
      </CardTitle>
      <ul>
        <li>
          S + V(preteritum) + O.
        </li>
      </ul>
    </CardContent>
  </Card>
);

PastTense.propTypes = propTypes;
PastTense.defaultProps = defaultProps;

export default PastTense;
