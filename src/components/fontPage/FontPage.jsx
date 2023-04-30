
import React from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const FontPage = () => {
  return (
  
      <Navbar bg="transparent" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="w-50 h-100"
              src="https://static.vecteezy.com/system/resources/thumbnails/000/620/372/small/aviation_logo-22.jpg"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <div className="d-flex align-items-center">
          <Form className="d-flex me-auto">
      <InputGroup>
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
        <Form.Control
          type="search"
          placeholder="Search your Destination..."
          className="me-2"
          aria-label="Search"
        />
      </InputGroup>
    </Form>
            <div className="ms-3 d-flex gap-3">
              <Link
                to="/"
                className="fw-bold  text-decoration-none"
              >
                Home
              </Link>
              <Link
                to="/news"
                className="fw-bold  text-decoration-none"
              >
                News
              </Link>
              <Link
                to="/destination"
                className="fw-bold  text-decoration-none"
              >
                Destination
              </Link>
              <Link
                to="/blog"
                className="fw-bold  text-decoration-none"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="fw-bold  text-decoration-none"
              >
                Contact
              </Link>
              <Link className="text-decoration-none fw-bold" to='/login' variant="outline-success">Login</Link>
            </div>
          </div>
        </Container>
      </Navbar>

  );
};

export default FontPage;



