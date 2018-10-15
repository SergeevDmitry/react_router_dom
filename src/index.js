import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import topics from './data/topics';
import books from './data/books';

import 'material-components-web/dist/material-components-web.css';
import './index.css';

ReactDOM.render(
  <Router>
    <App topics={topics} books={books} />
  </Router>
,document.getElementById('root'));
