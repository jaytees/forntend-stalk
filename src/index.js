import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import StalkApp from './StalkApp'

ReactDOM.render(
  <HashRouter>
    <StalkApp />
  </HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
