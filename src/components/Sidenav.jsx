import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidenav({ topics }) {
    return (
        <aside className="mdc-permanent-drawer">
            <nav className="mdc-list mdc-list--avatar-list">
                {topics.map(topic =>
                    <NavLink
                        key={topic.id}
                        to={`/books/${topic.id}`}
                        activeClassName="mdc-temporary-drawer--selected"
                        className="mdc-list-item">
                        <img src={`/img/topics/${topic.id}.svg`} className="mdc-list-item__start-detail"/>
                            {topic.title}
                    </NavLink>
                )}
            </nav>
        </aside>
    );
}

export default Sidenav;
