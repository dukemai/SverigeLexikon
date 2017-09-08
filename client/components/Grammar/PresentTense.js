import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardTitle } from '../share';
import './style.scss';

const propTypes = {

};

const defaultProps = {

};

const PresentTense = () => (
  <Card >
    <CardContent>
      <CardTitle>
        Presens
      </CardTitle>
      <ul>
        <li>
          S + V(presens) + O.
        </li>
        <li>
          <Link to="/verbs">
            Göra presens verb
          </Link>
        </li>
      </ul>
    </CardContent>
  </Card>
);

PresentTense.propTypes = propTypes;
PresentTense.defaultProps = defaultProps;

export default PresentTense;
