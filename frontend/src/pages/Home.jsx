import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css" 

const Home = () => {
  return (
    <>
      <Navbar />
      <Container className="text-center mt-5">
        {/* Website Name & Description */}
        <h1 className="fw-bold">Welcome to Job Portal</h1>
        <p className="lead text-muted">
          Your one-stop solution to find your dream job or hire the best talent!
        </p>

        {/* Login Buttons */}
        <div className="mt-4">
          <Button variant="primary" size="lg" as={Link} to="/login">
            Login as User
          </Button>
          <Button variant="danger" size="lg" as={Link} to="/login" className="ms-3">
            Login as HR
          </Button>
        </div>

        {/* About Section */}
        <Row className="mt-5">
          {/* ✅ Find Jobs (Navigates to /job-list) */}
          <Col md={4}>
            <Link to="/job-list" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="shadow-sm p-4 text-center clickable-card">
                <h3>🌟 Find Jobs</h3>
                <p>Search and apply for thousands of job listings from top companies.</p>
              </Card>
            </Link>
          </Col>

          {/* ✅ HR Portal (Navigates to /hr-register) */}
          <Col md={4}>
            <Link to="/hr-register" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="shadow-sm p-4 text-center clickable-card">
                <h3>👨‍💼 HR Portal</h3>
                <p>Post jobs, review applications, and hire the best candidates.</p>
              </Card>
            </Link>
          </Col>

          {/* ✅ Career Growth (Navigates to /about) */}
          <Col md={4}>
            <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
              <Card className="shadow-sm p-4 text-center clickable-card">
                <h3>📈 Career Growth</h3>
                <p>Enhance your career with resources, tips, and interview guidance.</p>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default Home;
