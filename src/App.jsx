import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Sidenav from './components/Sidenav';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Book from './pages/Book';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

class App extends Component {
    render() {
        return (
            <Router>
              <div className="app">
                  <Toolbar />

                  <Route path="/books" component={Sidenav} />

                  <Content>
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route exact path="/books/:topic?" component={Books} />
                        <Route path="/books/:topic/:book" component={Book} />
                        <Route path="/login" component={Login} />
                        <Route component={NotFound} />
                      </Switch>
                  </Content>
              </div>
            </Router>
        );
    }
}

export default App;
