import { useState } from "react";
import { Container, Form, Button, Card, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ Import Link
import Navbar from "../components/Navbar";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("candidate"); // "candidate" or "hr"
  const [redirect, setRedirect] = useState(false); // ✅ State for redirection

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const endpoint = role === "candidate" ? "/api/auth/login" : "/api/auth/hr-login";
      const response = await axios.post(`http://localhost:5000${endpoint}`, { email, password });

      alert("Login Successful!");
      setRedirect(true); // ✅ Set state to trigger redirect
    } catch (error) {
      alert("Login Failed!");
    }
  };

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="p-4 shadow" style={{ width: "400px" }}>
          <h2 className="text-center">Login</h2>

          {/* Role Selection (Candidate / HR) */}
          <ToggleButtonGroup type="radio" name="role" className="w-100 mb-3" value={role} onChange={setRole}>
            <ToggleButton id="candidate" value="candidate" variant="outline-primary">Candidate Login</ToggleButton>
            <ToggleButton id="hr" value="hr" variant="outline-danger">HR Login</ToggleButton>
          </ToggleButtonGroup>

          {/* Login Form */}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Button variant={role === "candidate" ? "primary" : "danger"} type="submit" className="w-100">
              Login as {role === "candidate" ? "Candidate" : "HR"}
            </Button>
          </Form>

          {/* Redirect After Login */}
          {redirect && (
            <div className="mt-3 text-center">
              <Link to={role === "candidate" ? "/dashboard" : "/hr-dashboard"} className="btn btn-success">
                Go to Dashboard
              </Link>
            </div>
          )}

          {/* Register Option */}
          <div className="mt-3 text-center">
            <p>Don't have an account?</p>
            <Link to="/register" className="btn btn-outline-primary">
              Register Here
            </Link>
          </div>

        </Card>
      </Container>
      
    </>
  );
};

export default Login;
