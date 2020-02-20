import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

const Books = (props) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/books`)
      .then((res) => {
        const books = res.data.books
        const myBooks = []
        books.forEach((book) => {
          if (book.owner === props.user._id) {
            myBooks.push(book)
          }
        })
        setBooks(myBooks)
      })
      .catch()
  }, [])

  if (!books[0]) return <h1>Loading...</h1>

  if (!books) return <div>Add some of your current stories to get started.</div>

  return (
    <div>
      <div>
        {console.log(books)}
        {books.map(book =>
          <li key={book._id}>
            <Link to={`/books/${book._id}`}>{book.title}</Link>
          </li>)}
      </div>
    </div>
  )
}

export default Books
