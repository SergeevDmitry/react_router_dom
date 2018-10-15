import React, { Component } from 'react';

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Home from './pages/Home';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Toolbar />
                
                <Content>
                    <Home />
                </Content>
            </div>
        );
    }
}

export default App;