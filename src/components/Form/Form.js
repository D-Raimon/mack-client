import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const BookForm = ({ book, handleSubmit, handleChange }) => {
  const cancelPath = book._id ? `#/books/${book._id}` : '#/books'

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='title'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Solo Leveling'
          name='title'
          onChange={handleChange}
          value={book.name}
          required
        />
      </Form.Group>
      <Form.Group controlId='picture'>
        <Form.Label>Thumbnail</Form.Label>
        <Form.Control
          type='text'
          placeholder='URL to thumbnail'
          name='picture'
          onChange={handleChange}
          value={book.picture}
          required
        />
      </Form.Group>
      <Form.Group controlId='website'>
        <Form.Label>Website</Form.Label>
        <Form.Control
          type='text'
          placeholder='URL to reading source'
          name='website'
          onChange={handleChange}
          value={book.website}
          required
        />
      </Form.Group>
      <Form.Group controlId='chapter'>
        <Form.Label>Current Chapter</Form.Label>
        <Form.Control
          type='number'
          min='0'
          placeholder='44'
          name='chapter'
          onChange={handleChange}
          value={book.chapter}
          required
        />
      </Form.Group>
      <Form.Group controlId='description'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type='text'
          placeholder='10 years ago, after “the Gate” that...'
          name='description'
          onChange={handleChange}
          value={book.description}
          required
        />
      </Form.Group>
      <Button variant="danger" size="sm" type="submit">Submit</Button>
      <Button variant="warning" size="sm" href={cancelPath} className="ml-2" type="button">Cancel</Button>
    </Form>
  )
}

export default BookForm
