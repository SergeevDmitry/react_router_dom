import React from 'react';
import { Link } from 'react-router-dom';

function Toolbar({ user }) {
    return (
        <header className="mdc-toolbar">
            <div className="mdc-toolbar__row">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <span className="mdc-toolbar__title">Библиотека</span>
                </section>

                <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                    <nav className="mdc-tab-bar">
                        <Link to="/" className="mdc-tab">Главная</Link>
                        <Link to="/about" className="mdc-tab">О проекте</Link>
                        <Link to="/books" className="mdc-tab">Книги</Link>
                        {user ?
                            <Link to="/logout" className="mdc-tab">Выйти</Link>
                            :
                            <Link to="/login" className="mdc-tab">Войти</Link>
                        }
                    </nav>
                </section>
            </div>
        </header>
    );
}

export default Toolbar;
