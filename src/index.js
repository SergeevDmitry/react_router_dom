import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import topics from './data/topics';
import books from './data/books';

import 'material-components-web/dist/material-components-web.css';
import './index.css';

ReactDOM.render(<App topics={topics} books={books} />, document.getElementById('root'));
