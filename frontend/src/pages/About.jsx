import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4 shadow">
              <h2 className="text-center">About Us</h2>
              <p className="text-muted text-center">
                Welcome to <strong>ATM Recruiter</strong>, your trusted platform for connecting job seekers and employers. 
                Our mission is to simplify the hiring process and create opportunities for talented professionals.
              </p>

              <h4>🌟 Our Mission</h4>
              <p>
                We strive to provide an efficient and user-friendly job portal that helps candidates find their dream jobs 
                and employers discover top talent with ease.
              </p>

              <h4>🚀 What We Offer</h4>
              <ul>
                <li>Seamless job applications for candidates</li>
                <li>Efficient job postings for HR professionals</li>
                <li>Secure authentication and user-friendly experience</li>
                <li>Personalized dashboards for both candidates and recruiters</li>
              </ul>

              <h4>📞 Contact Us</h4>
              <p>
                Have questions? Reach out to us at <strong>support@atmr.com</strong> or call us at <strong>+123 456 7890</strong>.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default About;
