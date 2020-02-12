import React, { useState, useEffect } from 'react'

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
            {book.title}
          </li>)}
      </div>
    </div>
  )
}

export default Books
