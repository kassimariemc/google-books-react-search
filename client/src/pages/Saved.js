import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

function Saved(props) {
  const [books, setBooks] = useState({})

  useEffect(() => {
    loadBooks()
  }, []);

  function loadBooks() {
    API.getBooks()
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book._id}>
                  <DeleteBtn onClick={() => deleteBook(book._id)} />
                  {book.link ? <img alt="book cover" src={book.image} style={{ float: "left", margin: 10 }}></img> : ""}
                  <strong>
                    {book.title} by {book.authors}
                  </strong>
                  <p>
                    {book.description}
                  </p>
                  <button style={{ float: "left", margin: 10 }} className="btn btn-warning">
                    <a href={book.link} target="_blank" rel="noopener noreferrer">View</a>
                  </button>
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <button style={{ margin: 10 }} className="btn btn-warning">
          <Link to="/">← Back to Search</Link>
          </button>
        </Col>
      </Row>
    </Container>
  );
}


export default Saved;
