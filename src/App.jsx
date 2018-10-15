import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

class App extends Component {
    render() {
        return (
            <Router>
              <div className="app">
                  <Toolbar />

                  <Content>
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/books" component={Books} />
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
