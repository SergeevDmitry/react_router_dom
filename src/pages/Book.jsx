import React from 'react';

import books from '../data/books';

function Book() {
    const book = books.find(book => book.slug === 'learning-javascript');

    return (
        <main id="book">
            <div className="mdc-card">
                <div className="mdc-card__horizontal-block">
                    <img src={`/img/books/${book.cover}`} className="mdc-card__media-item mdc-card__media-item--3x" alt={book.title} />

                    <section className="mdc-card__primary">
                        <h1 className="mdc-card__title mdc-card__title--large">{book.title}</h1>
                        
                        <p className="mdc-card__subtitle">{book.author}</p>
                        <p className="mdc-card__subtitle">{book.publisher}</p>
                        <p className="mdc-card__subtitle">{book.pages} стр.</p>
                        <p className="mdc-card__subtitle">{book.year} г.</p>

                        <div className="mdc-typography--body1">{book.description}</div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Book;