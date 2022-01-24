import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="navbar_bg" collapseOnSelect expand="lg" variant="dark">
      <Container className="d-flex flex-wrap">
        <Navbar.Brand as={Link} to="/home">
          <i class="fas fa-couch fa-2x"></i>
          <span className="ms-2 align-top">Decorate</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#features" className="navLink">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link href="#deets">
            <div className="shoppingCartIcon">
              <i class="fas fa-shopping-cart fa-2x"></i>
            </div>
            <div className="shoppingCartNumber">
              <span>0</span>
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
