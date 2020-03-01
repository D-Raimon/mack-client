import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import apiUrl from '../../apiConfig'
import './book.scss'

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
      <div className='book_primary'>
        <img className='book_img' src={book.picture}/>
        <div className='book_secondary'>
          <h1>{book.title}</h1>
          <ul>
            <li><a target='_blank' rel='noopener noreferrer' href={book.website}>Continue Reading</a></li>
            <li>Current Chapter: {book.chapter}</li>
            <li>Synopsis: {book.description}</li>
          </ul>
        </div>
      </div>
      <div className='book_buttons'>
        <Link to={`/books/${props.match.params.id}/edit`}>
          <Button size='sm' variant='danger'>Edit</Button>
        </Link>
        <Button className="ml-1" size='sm' variant='danger' onClick={destroy}>Delete</Button>
      </div>
    </Fragment>
  )
}

export default Book
