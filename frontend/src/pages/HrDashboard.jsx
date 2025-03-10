import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DashboardSidebar from "../components/DashboardSidebar";
import Footer from "../components/Footer";

const HrDashboard = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col md={3} className="p-0">
            <DashboardSidebar role="hr" /> {/* ✅ Passed role as "hr" to modify sidebar */}
          </Col>
          <Col md={9} className="p-4">
            <h2 className="mt-3">Welcome to HR Dashboard</h2> {/* ✅ Fixed navbar overlap */}

            <Row className="mt-4">
              <Col md={4}>
                <Link to="/addjob" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card className="shadow-sm p-3 text-center">
                    <h4>➕ 20</h4>
                    <p>Add Job</p> {/* ✅ Changed "Applied Jobs" to "Add Job" */}
                  </Card>
                </Link>
              </Col>
              <Col md={4}>
                <Card className="shadow-sm p-3 text-center">
                  <h4>👥 50</h4>
                  <p>Applicants</p>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="shadow-sm p-3 text-center">
                  <h4>✅ 10</h4>
                  <p>Hired Candidates</p>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default HrDashboard;
