import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../components/Navbar";
import DashboardSidebar from "../components/DashboardSidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col md={3} className="p-0">
            <DashboardSidebar />
          </Col>
          <Col md={9} className="p-4">
            <h2 className="mt-5">Welcome to Your Dashboard</h2> {/* Added margin-top to prevent overlap */}

            <Row className="mt-4">
              <Col md={4}>
                <Card className="shadow-sm p-3 text-center">
                  <h4>📄 10</h4>
                  <p>Applied Jobs</p>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="shadow-sm p-3 text-center">
                  <h4>🔖 5</h4>
                  <p>Saved Jobs</p>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="shadow-sm p-3 text-center">
                  <h4>✅ 3</h4>
                  <p>Jobs Interviewed</p>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
