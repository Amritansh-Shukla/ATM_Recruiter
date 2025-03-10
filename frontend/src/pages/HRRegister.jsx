import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ Use Link for navigation
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const HrRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/hr-register", { name, email, password });

      alert("HR Registration Successful!");
      // ✅ Redirect to login page after successful registration
      window.location.href = "/login"; 
    } catch (error) {
      alert("Registration Failed!");
    }
  };

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="p-4 shadow" style={{ width: "400px" }}>
          <h2 className="text-center text-danger">HR Register</h2>

          {/* HR Register Form */}
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100">
              Register as HR
            </Button>
          </Form>

          {/* ✅ Link to Login Page */}
          <div className="text-center mt-3">
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </Card>
      </Container>
     
    </>
  );
};

export default HrRegister;
