import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookFormModal extends React.Component {
    render() {
        return (
            <Container className="mt-5">
            <Form onSubmit={this.props.handleBookSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="read">
                <Form.Check type="checkbox" label="read" />
              </Form.Group>
              <Button type="submit">Add Book</Button>
            </Form>
          </Container>
        )
    }
}

export default BookFormModal;