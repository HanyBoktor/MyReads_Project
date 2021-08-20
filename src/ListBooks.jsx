import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import BookStat from './BookStat'

class ListBooks extends Component {
  static propTypes = {
    books: propTypes.array.isRequired
  }

  render() {
    const { books, changeShelf } = this.props
    console.log('coming from APP', books)

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter((book) => book.shelf === 'currentlyReading')
                    .map((book) => (
                      <li key={book.id}>
                        <BookStat
                          book={book}
                          changeShelf={changeShelf}
                          currentStat="currentlyReading"
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter((book) => book.shelf === 'wantToRead')
                    .map((book) => (
                      <li key={book.id}>
                        <BookStat book={book} changeShelf={changeShelf} currentStat="wantToRead" />
                      </li>
                    ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter((book) => book.shelf === 'read')
                    .map((book) => (
                      <li key={book.id}>
                        <BookStat book={book} changeShelf={changeShelf} currentStat="read" />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="open-search">
          <Link to="/search" className="add-contact">
            Search for a Book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
