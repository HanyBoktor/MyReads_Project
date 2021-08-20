import React, { Component } from 'react'

class BookStat extends Component {
  render() {
    const { book, changeShelf /*currentStat*/ } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book && book.imageLinks ? book.imageLinks.thumbnail : ''})`
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={book && book.shelf ? book.shelf : 'none'}
              onChange={(event) => changeShelf(book, event.target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book && book.authors ? book.authors : 'none'}</div>
      </div>
    )
  }
}

export default BookStat
