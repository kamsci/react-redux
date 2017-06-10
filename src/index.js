import React from 'react';
import 'babel-polyfill'; // Could pull in individual polyfills to reduce large 50K library
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'; // browserHistory uses HTML5 push state
import routes from './routes';

import './styles/styles.css'; // Webpack can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);