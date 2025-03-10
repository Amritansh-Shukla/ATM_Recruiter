import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ Use Link instead of Navigate
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const HRLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false); // ✅ State to track login

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/hr-login", { email, password });

      alert("Login Successful!");
      setLoginSuccess(true); // ✅ Show Link to HR Dashboard
    } catch (error) {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="p-4 shadow" style={{ width: "400px" }}>
          <h2 className="text-center">HR Login</h2>

          {/* HR Login Form */}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100">
              Login
            </Button>
          </Form>

          {/* ✅ Show Link to Dashboard After Successful Login */}
          {loginSuccess && (
            <div className="mt-3 text-center">
              <Link to="/dashboard-hr" className="btn btn-success">
                Go to HR Dashboard
              </Link>
            </div>
          )}

          <div className="text-center mt-3">
            <small>Don't have an account? <Link to="/register">Register here</Link></small>
          </div>
        </Card>
      </Container>
      
    </>
  );
};

export default HRLogin;
