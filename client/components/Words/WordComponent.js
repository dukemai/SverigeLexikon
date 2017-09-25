import React from 'react';
import { withRouter } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';

import { Card, CardContent, CardTitle } from '../share';
import { getWords } from './data';

const propTypes = {
  match: PropTypes.shape({}),
};

const defaultProps = {
  match: null,
};

const WordComponent = ({ match }) => {
  const word = match.params.word;
  const words = getWords(word);

  return (
    <Card className="words-content">
      <CardContent>
        <CardTitle>
          {word}
        </CardTitle>
        <Scrollbars style={{ height: '85vh' }}>
          <ul className="words-explanation-list">
            {words.map(w => (
              <li key={w.svenska}>
                <div className="text--primary">
                  {w.svenska},
                </div>
                <div className="text--sub">
                  {w.english},
                </div>
                <div className="text--sub">
                  {w.example}
                </div>
              </li>
            ))}
          </ul>
        </Scrollbars>
      </CardContent>
    </Card>
  );
};

WordComponent.propTypes = propTypes;
WordComponent.defaultProps = defaultProps;

export default withRouter(WordComponent);
