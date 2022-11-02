import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UpdateBookForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();

    let bookToUpdate = {
      title: e.target.title.value,
      description: e.target.description.value,
      read: e.target.read.checked,
      _id: this.props.selectedBook._id,
      __v: this.props.selectedBook.__v
    }
    this.props.updateBooks(bookToUpdate);
    this.props.hideUpdateForm();
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" defaultValue={this.props.selectedBook.title} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" defaultValue={this.props.selectedBook.description} />
          </Form.Group>
          <Form.Group controlId="read">
            <Form.Check type="checkbox" label="read" defaultChecked={this.props.selectedBook.read} />
          </Form.Group>
          <Button type="submit">Update Book</Button>
        </Form>
      </Container>
    )
  }
}

export default UpdateBookForm;