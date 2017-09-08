import React from 'react';

import { Card, CardContent, CardTitle } from '../share';
import './style.scss';

const propTypes = {

};

const defaultProps = {

};

const PresentPerfectTense = () => (
  <Card >
    <CardContent>
      <CardTitle>
        Supinum
      </CardTitle>
      <ul>
        <li>
           S + har + V(supinum) + O.
        </li>
      </ul>
    </CardContent>
  </Card>
);

PresentPerfectTense.propTypes = propTypes;
PresentPerfectTense.defaultProps = defaultProps;

export default PresentPerfectTense;
