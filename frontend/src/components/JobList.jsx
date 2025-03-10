import { Container, Row, Col } from "react-bootstrap";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  return (
    <Container>
      <Row>
        {jobs.map((job) => (
          <Col md={4} key={job.id}>
            <JobCard job={job} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobList;
