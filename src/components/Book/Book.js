import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import apiUrl from '../../apiConfig'

const Book = (props) => {
  const [book, setBook] = useState(null)
  const [destroyed, setDestroyed] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/books/${props.match.params.id}`)
      .then(res => setBook(res.data.book))
      .catch()
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/books/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(() => setDestroyed(true))
      .catch()
  }

  if (!book) {
    return <h1>Loading...</h1>
  }

  if (destroyed) {
    return <Redirect to={'/books'} />
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
      <Link to={`/books/${props.match.params.id}/edit`}>
        <Button className="mt-1 mr-1 mb-3" size='sm' variant='danger'>Edit</Button>
      </Link>
      <Button className="mt-1 mr-1 mb-3" size='sm' variant='danger' onClick={destroy}>Delete</Button>
    </Fragment>
  )
}

export default Book
