import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Sidenav from './components/Sidenav';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Book from './pages/Book';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';

class App extends Component {
    state = {
      user: null
    }

    login = user => {
      this.setState({ user }, () => this.props.history.push('/books'));
    }

    logout = () => {
      this.setState({ user: null}, () => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="app">
                <Toolbar user={this.state.user} />

                <Route path="/books" render={props => <Sidenav topics={this.props.topics} {...props}/>} />

                <Content>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/login" render={props => <Login onLogin={this.login} />} />
                      <Route path="/logout" render={props => <Logout onLogout={this.logout} />} />
                      <PrivateRoute exact path="/books/:topic?" user={this.state.user} component={Books} data={this.props.books} />
                      <PrivateRoute path="/books/:topic/:book"  user={this.state.user} component={Book} data={this.props.books} />

                      <Route component={NotFound} />
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);
