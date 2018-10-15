import React, { Component } from 'react';

class Login extends Component {
    onSubmit = event => {
        event.preventDefault();
        
        this.props.onLogin({
            username: this.usernameInput.value,
            password: this.passwordInput.value
        });
    };

    render() {
        return (
            <main id="login">
                <form onSubmit={this.onSubmit}>
                    <div className="mdc-textfield">
                        <input
                            type="text"
                            name="username"
                            className="mdc-textfield__input"
                            placeholder="Имя пользователя"
                            ref={input => this.usernameInput = input} />
                    </div>
                    
                    <div className="mdc-textfield">
                        <input
                            type="password"
                            name="password"
                            className="mdc-textfield__input"
                            placeholder="Пароль"
                            ref={input => this.passwordInput = input} />
                    </div>

                    <button type="submit" className="mdc-button mdc-button--primary mdc-button--raised">Войти</button>
                </form>
            </main>
        );
    }
}

export default Login;