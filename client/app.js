import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import { SideBar } from './components/share';
import { Grammar, Adverbs, Adjectives, Nouns, Verbs, Words } from './components';
import './style.scss';

const propTypes = {

};

const defaultProps = {

};

const App = () => (
  <HashRouter>
    <div className="app--lexikon app">
      <SideBar />
      <div className="app__right">
        <Scrollbars style={{ height: '100vh' }}>
          <Switch>
            <Route exact path="/(grammar?)" component={Grammar} />
            <Route exact path="/adverbs" component={Adverbs} />
            <Route exact path="/adjectives" component={Adjectives} />
            <Route exact path="/nouns" component={Nouns} />
            <Route exact path="/verbs" component={Verbs} />
            <Route exact path="/words/:word?" component={Words} />
          </Switch>
        </Scrollbars>
      </div>
    </div>
  </HashRouter>
);

App.propTypes = propTypes;
App.defaultProps = defaultProps;

ReactDOM.render(<App />, document.getElementById('mainContent'))
