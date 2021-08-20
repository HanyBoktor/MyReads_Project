import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BookStat from './BookStat'

class SearchBook extends Component {
  static propTypes = {
    books: propTypes.array.isRequired
  }
  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query
    }))
    this.updatedSearch(query)
    console.log()
  }

  updatedSearch = (query) => {
    !query
      ? this.setState({ searchedBooks: [] })
      : BooksAPI.search(query).then((searchedBooks) => {
          searchedBooks.error
            ? this.setState({ searchedBooks: [] })
            : this.setState({ searchedBooks })
        })
    console.log('we are here')
  }

  render() {
    const { query, searchedBooks } = this.state
    const { books, changeShelf } = this.props
    const showingBooksShelf =
      query === ''
        ? searchedBooks
        : searchedBooks
            .filter((c) => c.title.toLowerCase().match(query.toLowerCase()))
            .map((book) =>
              books.some((c) => c.id === book.id)
                ? (book.shelf = books.find((s) => s.id === book.id).shelf)
                : (book.shelf = 'none')
            )
    console.log(showingBooksShelf)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

            <Link className="close-search" to="/">
              Close
            </Link>
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map((searchedBooks) => (
              <li key={searchedBooks.id}>
                <BookStat book={searchedBooks} changeShelf={changeShelf} />
              </li>
            ))}
          </ol>
        </div>
        <div> {JSON.stringify(this.state)})</div>
      </div>
    )
  }
}

export default SearchBook
