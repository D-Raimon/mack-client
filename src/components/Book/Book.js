import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Book = (props) => {
  const [book, setBook] = useState(null)

  useEffect(() => {
    axios(`${apiUrl}/books/${props.match.params.id}`)
      .then(res => setBook(res.data.book))
      .catch()
  })

  if (!book) {
    return <h1>Loading...</h1>
  }

  return (
    <Fragment>
      <div>
        <h1>{book.title}</h1>
        <ul>
          <li>Thumbnail link: {book.picture}</li>
          <li>Link to read: {book.website}</li>
          <li>Current chapter: {book.chapter}</li>
          <li>Synopsis: {book.description}</li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Book
