import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-3">
      <Container fluid>
        {/* Left-Aligned Brand Name */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          ATM_Recruiter
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="mx-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-3">About</Nav.Link>
            <Nav.Link as={Link} to="/job-list" className="mx-3">Job List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
