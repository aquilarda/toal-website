import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <Navbar className="navbar" expand="sm">
      <Container>
        <Navbar.Brand translate="no" href="/" className="navbar-brand">
          Vertical
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggler">
          <i className="fa fa-bars custom-navbar-toggler-icon"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-toggler">
          <Nav>
            <Link className="nav-link" to="/about">
              Hakkımızda
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/contact">
              İletişim
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/bio">
              Biyografi
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
