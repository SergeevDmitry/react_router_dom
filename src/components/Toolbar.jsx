import React from 'react';

function Toolbar({ user }) {
    return (
        <header className="mdc-toolbar">
            <div className="mdc-toolbar__row">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <span className="mdc-toolbar__title">Библиотека</span>
                </section>
                
                <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                    <nav className="mdc-tab-bar">
                        <a href="/" className="mdc-tab">Главная</a>
                        <a href="/about" className="mdc-tab">О проекте</a>
                        <a href="/books" className="mdc-tab">Книги</a>
                        {user ?
                            <a href="/logout" className="mdc-tab">Выйти</a>
                            :
                            <a href="/login" className="mdc-tab">Войти</a>
                        }
                    </nav>
                </section>
            </div>
        </header>
    );
}

export default Toolbar;