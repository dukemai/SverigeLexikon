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
        Future Tense
      </CardTitle>
      <ul>
        <li>
          Presens + en tid.
          Jag kommer på fredag.
        </li>
        <li>
          tänker eller kommer att
          jag tänker äker tåget till kontoret imorgon.
        </li>
        <li>
          ska + verb
          jag ska komma till dig efter kl 18.
        </li>
      </ul>
    </CardContent>
  </Card>
);

Sentences.propTypes = propTypes;
Sentences.defaultProps = defaultProps;

export default Sentences;
