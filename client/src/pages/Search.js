import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    API.searchBook(formObject.search)
      .then(res =>
        setBooks(res.data.items)
      )
      .catch(err => console.log(err));
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  function handleSave(book) {
    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.previewLink,
      description: book.volumeInfo.description
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>What Books Would You Like to Read?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="search"
              placeholder="Title or Author"
            />
            <FormBtn onClick={handleFormSubmit}>
              Search
            </FormBtn>
          </form>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book.id}>
                  {book.volumeInfo.imageLinks ? <img alt="book cover" src={book.volumeInfo.imageLinks.thumbnail} style={{ float: "left", margin: 10 }}></img> : ""}
                  <strong>
                    {book.volumeInfo.title} by {book.volumeInfo.authors}
                  </strong>
                  <p>
                    {book.volumeInfo.description}
                  </p>
                  <FormBtn onClick={() => handleSave(book)}>
                    Save
                  </FormBtn>
                  <button style={{ float: "left", margin: 10 }} className="btn btn-warning">
                    <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">View</a>
                  </button>
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Search;
