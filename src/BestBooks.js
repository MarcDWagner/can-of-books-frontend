import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showAddBookModal: false
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: bookData.data
      })
    } catch (error) {
      console.log('An error has occurred.', error.response);
    }
  }

  deleteBook = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;

      await axios.delete(url);

      let updatedBooks = this.state.books.filter(book => book._id !== id);

      this.setState({
        books: updatedBooks
      });
     
    } catch(error) {
      console.log(error.message);
    }
  }

  handleBookSubmit = (event) => {
    event.preventDefault();
    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.read.checked
    }
    this.postBooks(newBook);
    this.setState({
      showAddBookModal: false
    })
  }

  postBooks = async (newBookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;

      let createdBook = await axios.post(url, newBookObj);

      this.setState({
        books: [...this.state.books, createdBook.data]
      })
      
    } catch(error) {
      console.log(error.message);

    }
  }

  showModal = (event) => {
    event.preventDefault();
    this.setState({
      showAddBookModal: true
    })
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */
    let bookDataParse = this.state.books.map((book) => {

      return (  
        <Carousel.Item key={book._id}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1000x400"
          alt="demo"
        />
        <Carousel.Caption>
          <h3>{book.title}</h3>
          <Button type="submit" onClick={() => this.deleteBook(book._id)}>Delete</Button>
        </Carousel.Caption>
      </Carousel.Item>
      )
    });
console.log(bookDataParse);
    return (
      <>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button type="submit" onClick={this.showModal}>Add New Book</Button>       
        
        {this.state.showAddBookModal ?
        <BookFormModal 
          handleBookSubmit={this.handleBookSubmit}
        />
        :
        <></>
        }
        {this.state.books.length ? (
          <Carousel>
            {bookDataParse}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}



      </>
    )
  }
}

export default BestBooks;
