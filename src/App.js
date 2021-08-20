import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    books: []
  }

  UNSAFE_componentWillMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    })
    console.log('change shelf ')
  }

  render() {
    return (
      <div>
        <Route
          path="/search"
          render={() => <SearchBook books={this.state.books} changeShelf={this.changeShelf} />}
        />

        <Route
          exact
          path="/"
          render={() => <ListBooks books={this.state.books} changeShelf={this.changeShelf} />}
        />
      </div>
    )
  }
}

export default App
