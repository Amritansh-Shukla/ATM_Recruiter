import { useState } from "react";
import { Container, Form, Button, Card, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ Use Link instead of Navigate
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("candidate"); // "candidate" or "hr"

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const endpoint = role === "candidate" ? "/api/auth/register" : "/api/auth/hr-register";
      await axios.post(`http://localhost:5000${endpoint}`, { name, email, password });

      alert("Registration Successful!");
      // ✅ Replace navigate with a link
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
          <h2 className="text-center">Register</h2>

          {/* Role Selection (Candidate / HR) */}
          <ToggleButtonGroup type="radio" name="role" className="w-100 mb-3" value={role} onChange={setRole}>
            <ToggleButton id="candidate" value="candidate" variant="outline-primary">Candidate Register</ToggleButton>
            <ToggleButton id="hr" value="hr" variant="outline-danger">HR Register</ToggleButton>
          </ToggleButtonGroup>

          {/* Register Form */}
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
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
            <Button variant={role === "candidate" ? "primary" : "danger"} type="submit" className="w-100">
              Register as {role === "candidate" ? "Candidate" : "HR"}
            </Button>
          </Form>

          {/* ✅ Add a Link for login */}
          <div className="text-center mt-3">
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </Card>
      </Container>
      
    </>
  );
};

export default Register;
