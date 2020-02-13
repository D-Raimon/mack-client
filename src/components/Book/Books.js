import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

const Books = (props) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/books`)
      .then(res => setBooks(res.data.books))
  }, [])

  if (!books[0]) return <h1>Loading...</h1>

  return (
    <div>
      <div>
        {books.map(book =>
          <li key={book._id}>
            <Link to={`/books/${book._id}`}>{book.title}</Link>
          </li>)}
      </div>
    </div>
  )
}

export default Books
