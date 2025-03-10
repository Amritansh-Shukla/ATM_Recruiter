import { Container, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/jobs/${id}`)
      .then(response => setJob(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <Container className="py-4">
      <Card>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Text>
            <strong>Company:</strong> {job.company}
            <br />
            <strong>Location:</strong> {job.location}
            <br />
            <strong>Description:</strong> {job.description}
          </Card.Text>
          <Button variant="success">Apply Now</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default JobDetail;
