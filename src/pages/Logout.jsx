import React, { Component } from 'react';

class Logout extends Component {
    componentWillMount() {
        this.props.onLogout();
    }

    render() {
        return null;
    }
}

export default Logout;