import React from 'react';
import { Link } from 'react-router-dom';

function Card({ book }) {
    return (
        <div className="mdc-card">
            <div className="mdc-card__horizontal-block">
                <img src={`/img/books/${book.cover}`} className="mdc-card__media-item mdc-card__media-item--2x" alt={book.title} />

                <section className="mdc-card__primary">
                    <h2 className="mdc-card__title mdc-card__title--large">{book.title}</h2>
                    <p className="mdc-card__subtitle">{book.author}</p>
                    <p className="mdc-card__subtitle">{book.publisher}, {book.year}</p>
                </section>
            </div>

            <section className="mdc-card__actions">
                <Link to={`/books/${book.topic}/${book.slug}`} className="mdc-button mdc-card__action">Подробнее</Link>
            </section>
        </div>
    );
}

export default Card;
